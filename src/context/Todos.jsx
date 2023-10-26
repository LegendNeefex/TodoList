import Card from "../shared/Card"
import { useState } from "react"
import { useContext } from "react"
import TodoContext from "./TodoContext"

function Todos({data}) {
  const [isStrikethrough,setStrikethrough] = useState(false)
  const {deleteHandler,setEditID, setEditMode, setText,setSend} = useContext(TodoContext)


  const strikeThroughHandler = ()=>{
    // setStrikethrough(true)

    if (isStrikethrough === true) {
      setStrikethrough(false)
    }else{
      setStrikethrough(true)
    }
  }

  const editHandler = ()=>{


    setEditMode(true)
    setEditID(data.id)
    setText(data.text)
    setSend("Update")
 }

    return (
      <Card>
        {/* <div className="theID">{data.id}</div> */}
        <h3 className= {isStrikethrough === true ? 'strikethrough' : null}>{data.text}</h3>
        <button className="style" onClick={strikeThroughHandler}>Done</button>
        <button className="style" onClick={()=> deleteHandler(data.id)}>Delete</button>
        <button className="style" onClick={editHandler}>Edit</button>
      </Card>
    )
}

export default Todos;