import TodoArrange from "./components/TodoArrange"
import TodoForm from "./components/TodoForm"
import TodoCount from "./components/TodoCount";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <>
        <TodoCount />
        <TodoForm />
        <TodoArrange/>
      </>
    </TodoProvider>
  )
}

export default App; 