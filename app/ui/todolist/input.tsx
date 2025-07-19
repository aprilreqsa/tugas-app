"use client"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo, deleteTodo } from "@/app/libs/features/todoListSlice"
import { useState } from "react"

export default function Input() {
    
    const dispatch = useDispatch()
    const [input,setInput] = useState("")
    const handleAdd = () => {
        if(input){
            dispatch(addTodo(input));
            setInput("");
        }
    }
    return (
        <div className="p-8 border-2 rounded-md max-w-xl space-y-3 mx-auto">
            <h1 className="font-bold text-xl">Tambah Todo List</h1>
            <div className="grid grid-cols-3">
                <label htmlFor="">Todo :</label>
                <input 
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                name="todo"
                className="p-1 rounded-md border col-span-2" type="text" placeholder="Masukan To do..." />
            </div>
            <div className="flex justify-end">
                <button 
                onClick={handleAdd}
                className="bg-green-600 hover:bg-green-500 text-white rounded-md px-3 py-1">Tambah</button>
            </div>
        </div>
    )
}