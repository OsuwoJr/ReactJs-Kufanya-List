import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  let todos = [
    'Skip Breakfast',
    'Skip lunch',
    'Eat Supper'
]
  return (
    <>
    <TodoInput/>
    <TodoList todos={todos}/>
      
    </>
  )
}

export default App
