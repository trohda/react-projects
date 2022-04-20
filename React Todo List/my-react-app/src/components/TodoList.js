import { useEffect, useState} from "react";
import Task from "./Task";

const TodoList = ({ toDos, fetchData }) => {
  const [active, setActive] = useState(false);
  const [all, setAll] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(fetchData, []);

  const toDosRender = () =>   
    toDos.map((el,indx) => {
      return (
        done ? 
        
      (toDos[indx].isCompleted ? <div id={el.id} className={toDos[indx].isCompleted ? "taskDone" : "task" } >
        <Task id={el.id} name={el.name} fetchData={fetchData} toDos={toDos} indx={indx} done={done}/>
      </div> : null)
      : active ?
      (!toDos[indx].isCompleted ? <div id={el.id} className={toDos[indx].isCompleted ? "taskDone" : "task" } >
      <Task id={el.id} name={el.name} fetchData={fetchData} toDos={toDos} indx={indx} done={done}/>
    </div> : null)
      : <div id={el.id} className={toDos[indx].isCompleted ? "taskDone" : "task" } >
      <Task id={el.id} name={el.name} fetchData={fetchData} toDos={toDos} indx={indx} done={done}/>
      </div>
      );
    });

  const handlerCompletedView = () =>{

    if (done===false){
      setDone(true);
      setAll(false);
      setActive(false);
    } else if(done ===true){
      setDone(false)
    } 
  }

  const handlerAllView = () =>{
    if (all === true){
      setAll(false);
    }else if (all===false){
      setAll(true);
      setDone(false);
      setActive(false);
    }
  }

  const handlerActiveView = () =>{
    if(active===false){
      setActive(true);
      setDone(false);
      setAll(false);
    }else if (active===true){
      setActive(false)
    }
  }

  return (
  <div className="tasksList" >
  <div className="options">
    <button className={all ? "completedButtonActive" : "completedButtonNonActive"} onClick={handlerAllView}>All</button>
    <button className={done ? "completedButtonActive" : "completedButtonNonActive"} onClick={handlerCompletedView}>Completed</button>
    <button className={active ? "completedButtonActive" : "completedButtonNonActive"} onClick={handlerActiveView}>Active</button>

  </div>
  {toDosRender()}
  </div>
  )
};

export default TodoList;
