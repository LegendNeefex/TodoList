
import { createContext, useState} from "react"
import { v4 } from "uuid"
import TodoData from "../components/TodoData"

const TodoContext = createContext()

export const TodoProvider = ({children})=>{
    const [data, setData] = useState(TodoData)
    const [send, setSend] = useState("Send")  
    const [editId, setEditID] = useState()
    const [editMode, setEditMode] = useState(false)
    const [text,setText] = useState("")                                                   
    const [isTyping, setIsTyping] = useState(false)
    
    const submitHandler = (e)=>{
        e.preventDefault();

        let obj = {text, id: ''}

        if (editMode) {
            obj.id = editId
            const edittedArray= data.map((item)=>{
                if (item.id === obj.id) {
                    return obj;
                }
                return item;
            })

            setData([...edittedArray])
        } else{
            if (text.length > 40) {
                alert("Character's should not be higher than 40")
            }else if (text === "") {
                alert("Please enter a task")
            }else{ 
                obj = {text: text, id: v4()}
                setData([obj, ...data])
            }
        }
        setText("")
        setIsTyping(null)
        setSend("Send")
        setEditMode(false)
    }

    const textHandler = (e)=>{
        setIsTyping(true)
        setText(e.target.value);
    }
    
    setTimeout(() => {
        setIsTyping(false)
    }, 3000);

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



    const stateData = {
        deleteHandler,
        moveUp,
        submitHandler,
        textHandler,
        isTyping,
        data,
        text,
        send,
        editMode,
        setEditMode,
        setEditID,
        editId,
        setText,
        setSend,
    }

    return <TodoContext.Provider value={stateData}>
        {children}
    </TodoContext.Provider>
}

export default TodoContext;