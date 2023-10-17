import { v4 } from "uuid";
import TodoData from "./components/TodoData"
import TodoArrange from "./components/TodoArrange"
import TodoForm from "./components/TodoForm"
import TodoCount from "./components/TodoCount";
import { useState } from "react"

function App() {
  const [data, setData] = useState ([])

  const moveUp = (e) =>{
    e.id = v4();
    setData([e, ...data])
  }

  const deleteHandler = (id)=>{
    if (window.confirm("Are you sure you sure you wanna delete this Task?")) {
      setData(data.filter((item)=>{
        return item.id !== id
      }))
    }
  }

  return (
    <>
    <TodoCount TodoCount = {data}/>
    <TodoForm Move = {(x)=> {
      moveUp(x)
    }}/>
    <TodoArrange Carrier = {data} deleteHandler={deleteHandler} />
    </>
  )
}

export default App