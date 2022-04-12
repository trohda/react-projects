import { useEffect, useState } from "react";

const TodoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/todo")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setToDos(data);
      });
  }, []);
  return (
    <>
      {toDos.map((el) => (
        <div key={el.id}>
          <p>{el.name}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
