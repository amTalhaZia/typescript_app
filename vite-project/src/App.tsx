import React from 'react'
import Addtodo from './components/Addtodo'
import Todo from './components/Todo.tsx'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <h1 className='ts' >Typescript</h1>
      <Navbar/>
      <Addtodo/>
      <Todo/>
    </main>
  )
}

export default App