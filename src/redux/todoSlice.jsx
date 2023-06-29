import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo(state,action) {
            console.log("action.payload",action.payload);
            return [...state, action.payload]
        },
        deleteTodo(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        updateTodo(state, action){
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                } else {
                    return task;
                }
            })  
        }
    }
})
const {actions, reducer} = todoSlice;
export const {addTodo, deleteTodo, updateTodo} = actions;
export default  reducer;