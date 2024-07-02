import React from 'react'

const TodoList = () => {
    let todos = [
        'kip Breakfas',
        'Skip lunch',
        'Eat Supper'
    ]
  return (

    <ul>
    {todos.map((todo, todoIndex)=>{
        return (
            <li keys={todoIndex}>{todo}</li>
        )
    })}
    </ul>
       
  )
}

export default TodoList
