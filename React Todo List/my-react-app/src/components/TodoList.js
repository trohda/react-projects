import { useEffect } from "react";

const TodoList = ({ toDos, fetchData }) => {
  useEffect(fetchData, []);

  const handlerDoneChange = (e, el) => {
    e.preventDefault();

    fetch(`http://localhost:8000/todo/${el}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isCompleted: toDos[el - 1].isCompleted ? false : true,
      }),
    });
    fetchData();
  };

  const toDosRender = () =>
    toDos.map((el) => {
      return (
        <div key={el.id}>
          <p>{el.name}</p>
          <form onSubmit={(e) => handlerDoneChange(e, el.id)}>
            <button id={el.id} type="submit">
              Done
            </button>
          </form>
        </div>
      );
    });

  return <>{toDosRender()}</>;
};

export default TodoList;
