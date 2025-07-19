"use client"

import { deleteTodo, toggleTodo } from "@/app/libs/features/todoListSlice"
import { RootState } from "@/app/libs/store"
import { useDispatch, useSelector } from "react-redux"

export default function Todo() {
    const todos = useSelector((state: RootState) => state.todo.todos)
    const dispatch = useDispatch()
    return (
        <div className="p-8 border-2 max-w-xl rounded-md mx-auto mt-5">
            <h1 className="text-xl font-bold mb-3">Todo List</h1>
            <ul className="space-y-2">
            {todos.map((todo) => (
                <li key={todo.id} className="grid grid-cols-4 space-x-3">
                    <span
                    className="font-bold text-lg"
                    >
                        {todo.title}
                    </span>
                    <span>
                        {!todo.completed ? "uncompleted" : "completed"}
                    </span>
                    <button
                    className="text-white bg-green-600 hover:bg-green-500 rounded-md px-2 py-1"
                    onClick={()=> dispatch(toggleTodo(todo.id))}
                    >
                    {!todo.completed ? "Selesai" : "Belum Selesai"}
                    </button>
                    <button
                    onClick={()=> dispatch(deleteTodo(todo.id))}
                    className="text-white bg-red-600 hover:bg-red-500 rounded-md px-2 py-1"
                    >Delete</button>
                </li>
            ))}
            </ul>
        </div>
    )
}