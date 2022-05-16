import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import style from "./components/TaskStyles.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchData = () => {
    fetch("http://localhost:8000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setToDos(data);
      });

    console.log(counter);
  };

  const taskCounterSetter = () => {
    const count = () =>
      toDos.map((el) => {
        if (!el.isCompleted) {
          return 1;
        } else {
          return 0;
        }
      });

    if (count().length == 0) {
      console.log("dupa");
    } else {
      setCounter(
        count().reduce((a, b) => {
          return a + b;
        })
      );
    }
  };

  useEffect(fetchData, []);
  useEffect(taskCounterSetter, [toDos]);

  return (
    <div>
      <h1 className="header">SIMPLE "TO DO" APPLICATION</h1>
      <AddTodo fetchData={fetchData} />
      <TodoList
        toDos={toDos}
        setToDos={setToDos}
        fetchData={fetchData}
        counter={counter}
      />
    </div>
  );
}

export default App;
