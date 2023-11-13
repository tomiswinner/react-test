import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodo';


export const App = () => {
  const [todoText, setTodoText] = useState()
  const [incompleteTodos, setIncompleteTodos] = useState(['aaaa', 'iiii'])
  const [completeTodos, setCompleteTodos] = useState(['uuuu', 'eeee'])

  const onChangeTodoText = (event) => setTodoText(event.target.value)
  const onClickAdd = () => {
    if (todoText === '') return
    // incompleteTodos のなかみは['aaa', 'iii'] という配列、それを展開して新しい要素をくっつけた配列を作ってるだけか
    // それに対して、map で展開する
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }
  

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    newIncompleteTodos.splice(index, 1)

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos]
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    newCompleteTodos.splice(index, 1)

    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChangeTodoText={onChangeTodoText} 
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>登録できるTODOは5個までです！</p>}
      <IncompleteTodos 
        incompleteTodos={incompleteTodos} 
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  )
}
