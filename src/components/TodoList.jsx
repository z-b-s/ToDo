import TodoItem from './TodoItem'

export default function TodoList({todos, removeTodo, toggleTodoComplite}) {
  return (
    <ul className='mt-10 border-2 rounded-lg inline-block border-[#9CCD62] '>
      {
        todos.map(todo => <TodoItem 
          key={todos.id} 
          toggleTodoComplite={toggleTodoComplite}  
          removeTodo={removeTodo}
          {...todo} 
        />)
      }
    </ul>
  )
}