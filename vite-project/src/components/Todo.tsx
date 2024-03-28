// Todo.tsx
import React from 'react';
import { useTodos } from '../Store/Todo';
import { useSearchParams } from 'react-router-dom';

const Todo: React.FC = () => {
  const { todos, toggledTodoAsCompleted, deleteHandler } = useTodos();
  const [searchParams] = useSearchParams();
  const todoFilter = searchParams.get('todos');
  let dataFiltering = todos;

  if (todoFilter === 'active') {
    dataFiltering = dataFiltering.filter((task) => !task.completed);
  }

  if (todoFilter === 'completed') {
    dataFiltering = dataFiltering.filter((task) => task.completed);
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {dataFiltering.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              className="todo-checkbox"
              checked={todo.completed}
              onChange={() => {
                toggledTodoAsCompleted(todo.id);
              }}
            />
            <label htmlFor={`todo-${todo.id}`} className="todo-label">
              {todo.task}
            </label>
            {todo.completed && (
              <button
                type="button"
                className="delete-button"
                onClick={() => {
                  deleteHandler(todo.id);
                }}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
