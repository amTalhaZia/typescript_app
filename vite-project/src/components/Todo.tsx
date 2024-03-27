import React from 'react';
import { usetodos } from '../Store/Todo'; 

const Todo = () => {
    const { todos,toggledTodoAsCompleted, deleteHandler} = usetodos(); 

    const dataFiltering = todos;

    return (
        <div>
            <ul>
                {
                    dataFiltering.map((todo) => { 
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" 
                                 id={`todo -${todo.id}`}
                                 checked={todo.completed}
                                 onChange={()=>{toggledTodoAsCompleted(todo.id)}}
                                 />
                                <label htmlFor={`tod-${todo.id}`}>{todo.task}</label>

                                {
                                    todo.completed && (
                                        <button type='button' onClick={()=>{deleteHandler(todo.id)}} >Delete</button>
                                    )
                                }
                            </li> 
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Todo;
