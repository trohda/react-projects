import { useRef } from "react";

const AddTodo = ({toDos, setToDos, fetchData}) => {
    const input = useRef(null);
    
    const taskAdder = (e)=>{
        fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: input.current.value })
        })
        e.preventDefault();
        fetchData();
        input.current.value = "";
    }

    return ( 
       <div>
            <form>
                <input ref={input} type="text" />
                <button onClick={taskAdder} >Add Task</button>
            </form>

       </div>
     );
}
 
export default AddTodo;