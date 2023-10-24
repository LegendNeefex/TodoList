import { useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoCount() {
  const {data:TodoCount} = useContext(TodoContext)

  return (
    <div className="count">
      <h2>Todo List</h2>
      <h3>{`Task Count: ${TodoCount.length}`}</h3>
    </div>
  )
}

export default TodoCount