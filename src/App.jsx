import { useState, useEffect } from "react";

import Header from "./components/Header"
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  // Сохранение todos в localStorage
  useEffect(() => {
    console.log(JSON.stringify(todos))
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Загрузка todos из localStorage
  useEffect(() => {
    const saveTodos = localStorage.getItem('todos')

    if (saveTodos) {
      setTodos(JSON.parse(saveTodos))
    }
  }, [])

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos, 
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplite = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo

          return {
            ...todo,
            completed: !todo.completed
          } 
        }
      )
    )
  }

  return (
    <div className="text-center">
      <Header />

      <InputField 
        text={text} 
        handleInput={setText} 
        handleSubmit={addTodo}
      />

      <TodoList 
        todos={todos} 
        toggleTodoComplite={toggleTodoComplite} 
        removeTodo={removeTodo} 
      />
    </div>
  );
}