import { useState } from "react"
import Card from "../shared/Card"


function Todo({data, deleteHandler}) {
  const [isStrikethrough,setStrikethrough] = useState(false)

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
      <button onClick={strikeThroughHandler}>Done</button>
      <button onClick={()=> deleteHandler(data.id)}>Delete</button>
    </Card>
  )
}

export default Todo;