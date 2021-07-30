import React from 'react'
import TodoItem from './components/TodoItem'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FormInput from './components/FormInput'
import { StyledLink, Page, Title, SuperButton, TeleText } from '../Home/styles'
const TodoList = () => {

  const [todos, setTodos] = useState(["Use the green text box below to type", "an entry, which can be added with the button below.", "Each item on the list can be deleted", "with the button immediately below it."])
  const [newItem, setNewItem] = useState("")

  const addItem = () =>{
    let newItems = todos.slice()
    newItems.push(newItem);
    setTodos(newItems)
  }
  return (
  <Page>
  <Title>TO-DO LIST</Title>
  <TeleText>Basic to-do list made with React. </TeleText><br/><br/>
  {todos.map((item, idx) => <TodoItem key={idx} idx={idx} item={item} todos={todos} setTodos={setTodos}/>)}<br/>
  <FormInput type="text" placeholder="TYPE ITEM HERE" value={newItem} setValue={setNewItem}/><br/>
  <SuperButton onClick={addItem}>ADD ITEM</SuperButton><br/><br/>
  <StyledLink to="/">RETURN TO HOME</StyledLink>
  </Page>
  )
}

export default TodoList