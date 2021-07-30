import React from 'react'
import { Item, ShyButton } from '../../Home/styles'

const TodoItem = ({idx, item, todos, setTodos}) => {

  
  const finishItem = () => {
    /*alert(`TASK DONE`) it was getting quite annoying, no? */
    let newTodos = todos.slice()
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }
  return (
  <div>
  <Item>{item}</Item>
  <ShyButton onClick={finishItem}>DELETE</ShyButton>
  </div>
  )
}

export default TodoItem