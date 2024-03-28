// Addtodo.tsx
import React, { FormEvent, useState } from "react";
import { useTodos } from "../Store/Todo";

const Addtodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <div className="addtodo-container">
      <form onSubmit={submitHandler} className="addtodo-form">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          className="addtodo-input"
        />
        <button type="submit" className="addtodo-button">Add</button>
      </form>
    </div>
  );
};

export default Addtodo;
