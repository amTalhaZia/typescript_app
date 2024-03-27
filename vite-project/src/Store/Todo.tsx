import React, { ReactNode, createContext, useContext, useState } from "react";

export type TodoProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
};

export const TodoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => [
      {
        id: Math.random().toString(),
        task,
        completed: false,
        createdAt: new Date(),
      },
      ...prev,
    ]);
  };

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};



export  const usetodos = () => {
  const consumer  = useContext(TodoContext)
  if(!consumer){
    throw new Error ('plz  provide wrapper')
  };
  return consumer;
}