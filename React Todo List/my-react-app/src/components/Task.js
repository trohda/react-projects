import { useState } from "react";

const Task = ({id, name, fetchData, toDos, indx}) => {
    const [toggle, setToggle] = useState(true)
    const [task, setTask] = useState(name)
    
    const handlerEdit = async (e, el) => {
      e.preventDefault();
      
      fetch(`http://localhost:8000/todo/${el}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: task,
        }),
      });
      await fetchData();
    };  

    const handlerDoneChange = async (e, el) => {
        e.preventDefault();
        
        fetch(`http://localhost:8000/todo/${el}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            isCompleted: toDos[indx].isCompleted ? false : true,
          }),
        });
        await fetchData();
      };   

    const handlerDelete = async (e,el) => {
      e.preventDefault();
      fetch(`http://localhost:8000/todo/${el}`, {
          method: "DELETE",
        });
      await fetchData();
    }
    return (
      <>
        {toggle ? 
        (<p
          onDoubleClick={() => {
            setToggle(false);
          }}
        >
          {task}
        </p>):
        (<input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setToggle(true);
              handlerEdit(event, id )
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />)}
        <div>
          <button
            className="doneButton"
            id={id}
            onClick={(e) => handlerDoneChange(e, id)}
          >
            Done
          </button>

          <button
            className="deleteButton"
            id={id}
            onClick={(e) => handlerDelete(e, id)}
          >
            Delete
          </button>
        </div>
      </>
    );
}
 
export default Task;