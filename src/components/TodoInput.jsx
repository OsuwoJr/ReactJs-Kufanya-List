import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleAddTodos} = props
  const[todoValue, setTodoValue] =useState('')
  return (
    <header>
      <input
       value={todoValue}
       onChange={(e)=>{
      setTodoValue(e.target.value)
       }}
       placeholder='ingiza kitu/enter something'
       />;
      <button onClick={()=>{
       handleAddTodos(todoValue)
       setTodoValue('')
      }}>
        ongeza/add
      </button>
    </header>
  )
}

export default TodoInput
