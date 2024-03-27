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
  toggledTodoAsCompleted: (id: string) => void;
  deleteHandler : (id:string)=> void;
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

  // completed

  const toggledTodoAsCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo; 
      })
    );
  };
  


  // delte  property

  const deleteHandler = (id : string) =>{
    setTodos((prev)=> 
     prev.filter((todo)=>{
      return  todo.id !== id
     })
    )
  }

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo, toggledTodoAsCompleted,deleteHandler}}>
      {children}
    </TodoContext.Provider>
  );
};

export const usetodos = () => {
  const consumer = useContext(TodoContext);
  if (!consumer) {
    throw new Error("plz  provide wrapper");
  }
  return consumer;
};
