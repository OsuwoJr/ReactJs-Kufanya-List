import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
 
const [todos, setTodos] = useState ([
    'Skip Breakfast',
    'Skip lunch',
    'Eat Supper'
])
  return (
    <>
    <TodoInput/>
    <TodoList todos={todos}/>
      
    </>
  )
}

export default App
