import Card from "../shared/Card"
import { useState } from "react"
import { useContext } from "react"
import TodoContext from "./TodoContext"

function Todos({data}) {
  const [isStrikethrough,setStrikethrough] = useState(false)
  const {deleteHandler} = useContext(TodoContext)

  const strikeThroughHandler = ()=>{
    // setStrikethrough(true)

    if (isStrikethrough === true) {
      setStrikethrough(false)
    }else{
      setStrikethrough(true)
    }
  }


    return (
      <Card>
        {/* <div className="theID">{data.id}</div> */}
        <h3 className= {isStrikethrough === true ? 'strikethrough' : null}>{data.text}</h3>
        <button className="style" onClick={strikeThroughHandler}>Done</button>
        <button className="style" onClick={()=> deleteHandler(data.id)}>Delete</button>
      </Card>
    )
}

export default Todos;