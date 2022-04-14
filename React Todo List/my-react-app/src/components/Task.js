const Task = ({id, name}) => {
    
    // const handlerDoneChange = (e, el) => {
    //     e.preventDefault();
    
    //     fetch(`http://localhost:8000/todo/${el}`, {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         isCompleted: toDos[el - 1].isCompleted ? false : true,
    //       }),
    //     });
    //     fetchData();
    //   };
   
   
   
   
    return ( 
        <>
        {/* // <div key={id}>
        //     <p >{name}</p>
        //     <form onSubmit={(e) => handlerDoneChange(e, id)}>
        //     <button id={id} type="submit">
        //       Done
        //     </button>
        //   </form>
        // </div> */}
        </>
     );
}
 
export default Task;