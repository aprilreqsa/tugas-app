import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '@/app/libs/features/counterSlice'
import todoReducer from '@/app/libs/features/todoListSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch