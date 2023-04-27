import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import PlusIcon from "@/assets/svg/plus.svg";
import { AddTodoProps } from "../types";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

export const AddTodo = ({
  handleSubmitTodo,
  title,
  description,
}: AddTodoProps) => (
  <Formik
    initialValues={{ title, description }}
    validationSchema={validationSchema}
    onSubmit={handleSubmitTodo}
  >
    {({ isSubmitting, values, handleChange }) => (
      <Form className="flex justify-between w-full flex-wrap flex-col">
        <div className="w-full  mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <Field
            type="text"
            name="title"
            className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-500 ease-in-out p-2"
            placeholder="Enter title"
            onChange={handleChange}
            value={values.title}
          />
          <ErrorMessage
            name="title"
            className="text-red-500 block mt-2"
            component="p"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <Field
            name="description"
            className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-500 ease-in-out p-2"
            placeholder="Enter description"
            onChange={handleChange}
            as="textarea"
            rows="4"
            value={values.description}
          />
          <ErrorMessage
            name="description"
            className="text-red-500 block mt-2"
            component="p"
          />
        </div>
        <button
          type="submit"
          aria-label="Add todo"
          disabled={isSubmitting}
          className="flex items-center justify-center p-2 bg-blue-500 rounded text-white"
        >
          <Image priority src={PlusIcon} alt="Add" width="20" height="20" />
        </button>
      </Form>
    )}
  </Formik>
);
