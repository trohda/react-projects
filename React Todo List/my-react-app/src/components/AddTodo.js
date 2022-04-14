import { useRef, useState } from "react";

const AddTodo = ({fetchData}) => {
    const [newTaskInput,setNewTaskInput] = useState('')
    // const input = useRef(null);
    
    const taskAdder = async (e)=>{
        fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newTaskInput, isCompleted: false })
        })
        await fetchData();
        e.preventDefault();
        setNewTaskInput('');
    }

    return ( 
       <>
            <form onSubmit={e=>taskAdder(e)}>
                <input type="text" value={newTaskInput} onChange={e=>setNewTaskInput(e.target.value)}/>
                <button type="submit" >Add Task</button>
            </form>

       </>
     );
}
 
export default AddTodo;