import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [toDos, setToDos] = useState([]);
  
  const fetchData = () =>{
    fetch("http://localhost:8000/todo")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setToDos(data);
    });
  }
  return (
    <div>
      <AddTodo toDos={toDos} setToDos={setToDos} fetchData={fetchData}/>
      <TodoList toDos={toDos} setToDos={setToDos} fetchData={fetchData}/>
    </div>
  );
}

export default App;
