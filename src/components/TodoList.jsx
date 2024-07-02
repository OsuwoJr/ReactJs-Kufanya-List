import React from 'react'
import TodoCard from './TodoCard'

const TodoList = () => {
    let todos = [
        'Skip Breakfast',
        'Skip lunch',
        'Eat Supper'
    ]
  return (

    <ul className='main'>
    {todos.map((todo, todoIndex)=>{
        return (
            <TodoCard key={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
            
        )
    })}
    </ul>
       
  )
}

export default TodoList
