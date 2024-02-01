import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    id:null,
    title:'',
    detail:'',
    date:'',
    status:''
} 

const TodoItemSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        getCurrentTodoData(state=initialState,todo){

            console.log("TodoItemSlice 123456",todo.payload);
        return {
           ...state,
           id:todo.payload.id,
           title:todo.payload.title,
           detail:todo.payload.detail,
           date:todo.payload.date,
           status:todo.payload.status
        }

        }

    }
})

export default TodoItemSlice.reducer;
export const todoAction =TodoItemSlice.actions;