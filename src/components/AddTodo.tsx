import { AddTodoProps } from "../types"
import Image from 'next/image';
import PlusIcon  from "@/assets/svg/plus.svg"

export const AddTodo = ({
  handleSubmitTodo,
  title,
  description,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      name="title"
      value={title}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <textarea
      name="description"
      value={description}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
    <Image
      priority
      src={PlusIcon}
      alt="Add"
    />
      {/* <PlusIcon /> */}
    </button>
  </form>
)