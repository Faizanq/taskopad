import { TodoProps } from "../types"

export const Row = ({
  todo: { id, title, description, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={`
        flex w-full p-4 mb-2 justify-between items-center
       ${isCompleted ? "bg-gray-400 " : "bg-green-300"}
      `}
  >
    <p
      className={`
          ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
    >
      {title}
    </p>
    <div className="flex justify-between items-center gap-2">
      <button
        aria-label="Delete a todo"
        className=" w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-7 w-7"
      />
    </div>
  </div>
)