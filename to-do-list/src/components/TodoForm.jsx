import { useState } from "react"

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input className="todo-input" type="text" placeholder="What's your task for today?" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className="todo-btn" type="submit">Add Task</button>
    </form>
  )
}

export default TodoForm