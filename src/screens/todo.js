import React, { useState } from 'react'
import { uuid } from 'uuidv4'
import { deleteTodo } from '../actions/todo'
import {  useDispatch } from 'react-redux'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const submit = e => {
    e.preventDefault()
    const newTodos = { id: uuid(), content: inputValue }
    setTodos([...todos, newTodos])
    setInputValue('')
  }


  return (
    <div>
      <span>Todo</span>
      <form onSubmit={submit}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type='text'
        ></input>
        <input type='submit'></input>
      </form>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default Todo
