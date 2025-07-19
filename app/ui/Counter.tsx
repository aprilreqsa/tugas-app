"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../libs/store"
import { increment, decrement,incrementByAmount } from "../libs/features/counterSlice"


export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="space-x-3">
            <h1>Counter: {count}</h1>
            <button className="px-3 py-1 bg-red-600 rounded-md" onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(5))}>Increment By 5</button>
        </div>
    )
}