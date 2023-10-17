import { useState } from "react"


function TodoForm({Move}) {
    const [text,setText] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();

        const popUp = {
            text: text,
        }

        Move(popUp);
        setText("")
    }

    const textHandler = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }

    return (
    <form onSubmit={submitHandler} className="thisForm">
        <input onChange={textHandler} type="text" value={text}/>
        <button type="submit">Send</button>
    </form>
  )
}

export default TodoForm