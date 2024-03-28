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

    const [todos, setTodos] = useState<Todo[]>(() => {
      try {
        const newTodos = localStorage.getItem("todos");
        return newTodos ? JSON.parse(newTodos) : [];
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
        return [];
      }
    });
    



  const handleAddTodo = (task: string) => {
    const newTodo = {
      id: Math.random().toString(),
      task,
      completed: false,
      createdAt: new Date(),
    };
  
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
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


const deleteHandler = (id: string) => {

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  setTodos(updatedTodos);
  
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
};


  return (
    <TodoContext.Provider value={{ todos, handleAddTodo, toggledTodoAsCompleted,deleteHandler}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const consumer = useContext(TodoContext);
  if (!consumer) {
    throw new Error("plz  provide wrapper");
  }
  return consumer;
};
