import { configureStore } from "@reduxjs/toolkit";
import TodoItemSlice from "./slices/TodoItemSlice";


export const store = configureStore({
    reducer:{
        todo:TodoItemSlice
    }
}
    
)