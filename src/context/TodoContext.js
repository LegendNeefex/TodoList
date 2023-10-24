import { createContext, useState} from "react"
import { v4 } from "uuid"
import TodoData from "../components/TodoData"

const TodoContext = createContext()

export const TodoProvider = ({children})=>{
    const [data, setData] = useState(TodoData)

    const [text,setText] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    const submitHandler = (e)=>{
        e.preventDefault();

        if (text.length > 40) {
            alert("Character's should not be higher than 50")
        }else{
            let obj = {text: text, id: v4()}
            setData([obj, ...data])
        }




        // const popUp = {
        //     text: text,
        // }

        // if (text.length > 50) {
        //     alert("Character should not be higher than 50")
        // } else{
        //     const move =((x)=>{moveUp(x)})
        //     console.log(move);
        //     move(popUp);
        // }


        setText("")
        setIsTyping(null)
    }

    const textHandler = (e)=>{
        console.log(e.target.value);
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
    }

    return <TodoContext.Provider value={stateData}>
        {children}
    </TodoContext.Provider>
}

export default TodoContext;