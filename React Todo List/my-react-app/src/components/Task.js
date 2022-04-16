
const Task = ({id, name, fetchData, toDos, indx}) => {
    
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
             <p>{name}</p>
             <div>
             <button className="doneButton" id={id} onClick={(e) => handlerDoneChange(e, id)}>
               Done
             </button>
  
               <button className="deleteButton" id={id} onClick={(e) => handlerDelete(e, id)}>
                 Delete
               </button>
             </div>       
        </>
     );
}
 
export default Task;