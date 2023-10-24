import { useContext } from "react"
import TodoContext from "../context/TodoContext"
import Todos from "../context/Todos"


function TodoArrange() {
    const {deleteHandler, data} = useContext(TodoContext)
  
    return (
      <>
        {data.map((item)=>(
            <Todos data={item} key={item.id} deleteHandler = {deleteHandler} />
        ))}
      </>
    )
  }
  
  export default TodoArrange