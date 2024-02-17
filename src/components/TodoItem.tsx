"use client";

import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
    setIsDeleting(false);
  };

  return (
    <li className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className="peer cursor-pointer appearance-none w-6 h-6 border-2 border-black rounded checked:bg-black checked:border-transparent focus:outline-none"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className={`peer-checked:line-through peer-checked:text-slate-500 text-xl cursor-pointer break-words ${
          isDeleting ? "opacity-50" : ""
        }`}
        style={{ maxWidth: "15rem" }}
      >
        {title}
      </label>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className={`text-red-600 cursor-pointer ml-36 focus:outline-none ${
          isDeleting ? "opacity-50" : ""
        }`}
      >
        {isDeleting ? "Deleting..." : <FaRegTrashCan />}
      </button>
    </li>
  );
}
