import { useContext } from "react"
import TodoContext from "../context/TodoContext"

function TodoForm() {
    const {submitHandler,textHandler,text,isTyping} = useContext(TodoContext)
    
    return (
        <form onSubmit={submitHandler} className="thisForm">
        <input onChange={textHandler} type="text" value={text} placeholder="Enter your task here"/>
        <button type="submit">Send</button>
        {isTyping ? <p className="typing">Typing...</p> : null}
    </form>
  )
}

export default TodoForm;