import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Features/TodoSlice"; // ✅ Action creator

const AddTodos = () => {
  const [input, setInput] = useState<string>(''); // ✅ lowercase string
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input?.trim() === '') return;
         dispatch(AddTodo(input)) // ✅ dispatch action
    setInput(''); // ✅ clear input
  };

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        value={input}
        placeholder="Enter a todo"
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodos;
