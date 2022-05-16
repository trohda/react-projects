import { useEffect, useState } from "react";
import Task from "./Task";

const TodoList = ({ toDos, fetchData }) => {
  const [active, setActive] = useState(false);
  const [all, setAll] = useState(true);
  const [done, setDone] = useState(false);

  const toDosRender = () =>
    toDos.map((el, indx) => {
      return done ? (
        toDos[indx].isCompleted ? (
          <div
            key={el.id}
            className={toDos[indx].isCompleted ? "taskDone" : "task"}
          >
            <Task
              id={el.id}
              name={el.name}
              fetchData={fetchData}
              toDos={toDos}
              indx={indx}
            />
          </div>
        ) : null
      ) : active ? (
        !toDos[indx].isCompleted ? (
          <div
            key={el.id}
            className={toDos[indx].isCompleted ? "taskDone" : "task"}
          >
            <Task
              id={el.id}
              name={el.name}
              fetchData={fetchData}
              toDos={toDos}
              indx={indx}
            />
          </div>
        ) : null
      ) : (
        <div
          key={el.id}
          className={toDos[indx].isCompleted ? "taskDone" : "task"}
        >
          <Task
            id={el.id}
            name={el.name}
            fetchData={fetchData}
            toDos={toDos}
            indx={indx}
            isCompleted={toDos[indx].isCompleted}
          />
        </div>
      );
    });

  const handlerCompletedView = () => {
    if (done === false) {
      setDone(true);
      setAll(false);
      setActive(false);
    } else if (done === true) {
      setDone(false);
      setAll(true);
    }
  };

  const handlerAllView = () => {
    if (all === true) {
      setAll(false);
    } else if (all === false) {
      setAll(true);
      setDone(false);
      setActive(false);
    }
  };

  const handlerActiveView = () => {
    if (active === false) {
      setActive(true);
      setDone(false);
      setAll(false);
    } else if (active === true) {
      setActive(false);
      setAll(true);
    }
  };

  const deleteAllDone = (e) => {
    toDos.map((el) => {
      el.isCompleted
        ? fetch(`http://localhost:8000/todo/${el.id}`, {
            method: "DELETE",
          })
        : fetchData();
      e.preventDefault();
    });
  };

  const markAllAsDone = async () => {
    toDos.forEach((todo) => {
      console.log(todo.isCompleted);
      console.log(todo.id);
      let test = todo.isCompleted;

      if (!todo.isCompleted) {
        fetch(`http://localhost:8000/todo/${todo.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            isCompleted: !test,
          }),
        });
      }
    });
    await fetchData();
  };

  return (
    <div className="tasksList">
      <div className="options">
        <button
          className={all ? "completedButtonActive" : "completedButtonNonActive"}
          onClick={handlerAllView}
        >
          All
        </button>
        <button
          className={
            done ? "completedButtonActive" : "completedButtonNonActive"
          }
          onClick={handlerCompletedView}
        >
          Done
        </button>
        <button
          className={
            active ? "completedButtonActive" : "completedButtonNonActive"
          }
          onClick={handlerActiveView}
        >
          Active
        </button>
      </div>
      {toDosRender()}
      <div className="deleteMarkAll">
        <button className="deleteMarkButton" onClick={(e) => deleteAllDone(e)}>
          Delete all done tasks
        </button>

        <button className="deleteMarkButton" onClick={(e) => markAllAsDone(e)}>
          Mark all as done
        </button>
      </div>
    </div>
  );
};

export default TodoList;
