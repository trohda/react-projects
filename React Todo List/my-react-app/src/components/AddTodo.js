import { useState } from "react";

const AddTodo = ({ fetchData }) => {
  const [newTaskInput, setNewTaskInput] = useState("");

  const taskAdder = (e) => {
    fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTaskInput, isCompleted: false }),
    }).then(() => fetchData());

    e.preventDefault();
    setNewTaskInput("");
  };

  return (
    <div className="addTodo">
      <form className="addTodoFormStyle" onSubmit={(e) => taskAdder(e)}>
        <label htmlFor="taskContent" className="addNewTaskLabel">
          Add New Task:
        </label>
        <textarea
          id="taskContent"
          className="inputStyle"
          type="text"
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
        />
        <button className="addTaskButton" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
