import React from 'react'

const TodoList = () => {
    let todos = [
        'kip Breakfast',
        'Skip lunch',
        'Eat Supper'
    ]
  return (

    <ul className='main'>
    {todos.map((todo, todoIndex)=>{
        return (
            <li className='todoItem' keys={todoIndex}>{todo}
            <i class="fa-solid fa-pen-to-square"></i>
            </li>
            
        )
    })}
    </ul>
       
  )
}

export default TodoList
