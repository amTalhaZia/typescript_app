import React,{FormEvent, useState} from 'react'
import { usetodos } from '../Store/Todo'

const Addtodo = () => {
    const [todo, setTodo] = useState('')
    const{handleAddTodo} = usetodos()


    const submitHandler = (e :FormEvent<HTMLFormElement>) =>{
         e.preventDefault();
         handleAddTodo(todo);
         setTodo('')
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
             <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default Addtodo