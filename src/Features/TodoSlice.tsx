import { createSlice,nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [{id:1,text:"hello bantai"}]
};



export  const TodoSlice=createSlice({
       name:'todo',
       initialState,
       reducers:{
        AddTodo:(state,action :PayloadAction<string>)=>{
             const todo={
                id:Date.now(),
                text:action.payload
             }
             state.todos.push(todo);
        },
        
            removeTodo:(state,action:PayloadAction<number>)=>{
                state.todos=state.todos.filter((e)=>{
               return  e.id!==action.payload
                })
            }
       }
})

export const {AddTodo,removeTodo} =TodoSlice.actions

export default TodoSlice.reducer