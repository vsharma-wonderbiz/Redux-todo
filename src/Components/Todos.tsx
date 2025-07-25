import type { RootState } from "../App/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/TodoSlice";


const Todos=()=>{

    const todos=useSelector( (state:RootState)=>state.todo.todos)
    const dispatch=useDispatch();

    return(
        <>
        
            {
            todos.map((e)=>{
                return(
                    
                     <li
                  key={e.id}
                >
                   {e.text}

                   <button onClick={ () =>dispatch(removeTodo(e.id))}>delete</button>
                </li>
                
                )
               
            })
          }
          
          
        </>
    )
}

export default Todos;