import React from 'react'

const TodoCard = (props) => {
  const {children, handleDeleteTodo, index} = props
  return (
    <div>
      <li className='todoItem' >
         {children}
        <div className='actionsContainer'>

          <button>
          <i className="fa-solid fa-pen-to-square"></i>
          </button>

          <button
          onClick={()=>{handleDeleteTodo(index)}}
          >
          <i className="fa-solid fa-trash"></i>
          </button>

        </div>
      </li>
    </div>
  )
}

export default TodoCard
