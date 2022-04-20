import { useEffect} from "react";
import Task from "./Task";

const TodoList = ({ toDos, fetchData }) => {
  useEffect(fetchData, []);
  const toDosRender = () =>   
    toDos.map((el,indx) => {
      return (
        <div id={el.id} className={toDos[indx].isCompleted ? "taskDone" : "task" } >
          <Task id={el.id} name={el.name} fetchData={fetchData} toDos={toDos} indx={indx}/>
        </div>
      );
    });
  return (
  <div className="tasksList" >
  {toDosRender()}
  </div>
  )
};

export default TodoList;
