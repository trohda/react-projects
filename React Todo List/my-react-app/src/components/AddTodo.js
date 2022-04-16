import { useState } from "react";

const AddTodo = ({fetchData}) => {
    const [newTaskInput,setNewTaskInput] = useState('')
    
    const taskAdder = async (e)=>{
        fetch('http://localhost:8000/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newTaskInput, isCompleted: false })
        })
        
        e.preventDefault();
        setNewTaskInput('');
        await fetchData();
    }
    

    return ( 
       <div className="addTodo">
            <form onSubmit={e=>taskAdder(e)}>
                <input className="inputStyle" type="text" value={newTaskInput} onChange={e=>setNewTaskInput(e.target.value)}/>
                <button type="submit" >Add Task</button>
            </form>

       </div>
     );
}
 
export default AddTodo;