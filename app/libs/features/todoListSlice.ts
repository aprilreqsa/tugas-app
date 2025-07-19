import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}
interface TodoState {
    todos: Todo[]
}

const initialState : TodoState = {todos: []}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now().toString(),
                title: action.payload,
                completed: false
            };
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})


export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer