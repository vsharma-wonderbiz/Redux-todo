// import type { RootState } from "../App/Store";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeTodo } from "../Features/TodoSlice";


// const Todos=()=>{

//     const todos=useSelector( (state:RootState)=>state.todo.todos)
//     const dispatch=useDispatch();

//     return(
//         <>
        
//             {
//             todos.map((e)=>{
//                 return(
                    
//                      <li
//                   key={e.id}
//                 >
//                    {e.text}

//                    <button onClick={ () =>dispatch(removeTodo(e.id))}>delete</button>
//                 </li>
                
//                 )
               
//             })
//           }
          
          
//         </>
//     )
// }

// export default Todos;



import type { RootState } from "../App/Store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../Features/TodoSlice";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  // Track which todo is being edited and its new text
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  return (
    <>
      {todos.map((e) => {
        return (
          <li key={e.id}>
            {editId === e.id ? (
              <>
                {/* If editing, show input */}
                <input
                  type="text"
                  value={editText}
                  onChange={(ev) => setEditText(ev.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch(editTodo({ id: e.id, text: editText }));
                    setEditId(null); // exit edit mode
                  }}
                >
                  Save
                </button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {/* Normal view */}
                {e.text}
                <button onClick={() => dispatch(removeTodo(e.id))}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditId(e.id);
                    setEditText(e.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Todos;
