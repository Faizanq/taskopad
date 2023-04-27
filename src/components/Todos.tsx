import React, { ChangeEvent, FormEvent, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Formik, Form, Field } from 'formik';

import { Row } from "./Row"
import { AddTodo } from "./AddTodo"
import { data } from "../todo"
import { Todo } from "../types"

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const todosLength = todos.length
  const hasTodos = todos.length > 0
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos)
    setTitle("")
    setDescription("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmitTodo = (values, { resetForm }) => {
    const { title, description } = values;
    const todo = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    handleAddTodo(todo);
    resetForm();
  };


  return (
    <section className="w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        title={title}
        description={description}
      />
      <div className="h-10" />
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p>
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
  )
}