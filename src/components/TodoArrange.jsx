import Todo from "./Todo"

function TodoArrange({Carrier, deleteHandler}) {
  return (
    <>
      {Carrier.map((item)=>(
            <Todo data = {item} key={item.id} deleteHandler = {deleteHandler} />
      ))}
    </>
  )
}

export default TodoArrange