export default function TofoItem({id, text, completed, toggleTodoComplite, removeTodo}) {
  return (
    <li className="flex justify-start gap-2 m-2" key={id}>
      <input className="peer" type="checkbox" checked={completed} onChange={() => toggleTodoComplite(id)}/>
      <span className="text-[#F6F8E2] ease-in-out duration-500 text-xl peer-checked:line-through peer-checked:opacity-[30%]">{text}</span>
      <span onClick={() => removeTodo(id)} className="text-[#9CCD62] cursor-pointer">&times;</span>
    </li>
  )
}