import './App.css'
import { useState } from 'react'

function App() {
  const [Task, setTask] = useState([]); // FIXED
  const [newTask, setNewTask] = useState("");

  const HandelTask = (e) => {
    e.preventDefault();

    if (newTask.trim() === "") {
      alert("Please Enter A Task!");
      return;
    }

    setTask([...Task, newTask]); // ADD TASK
    console.log("Task Added Successfully:", newTask);

    setNewTask(""); // FIXED
  };

  const HandelDelete = (index) => {
    const updatedTask = Task.filter((task, i) => i !== index);
    setTask(updatedTask);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form onSubmit={HandelTask}>
          <input
            type='text'
            placeholder='Add Your New Task here'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} // FIXED
          />
          <button type='submit' style={{ marginLeft: "10px" }}>Add Task</button>
        </form>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "5px" }}>
          {Task.length === 0 ? (
            <h6>No Task Available</h6>
          ) : (
            Task.map((task, index) => (
              <li key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
                {task}
                <button
                  onClick={() => HandelDelete(index)} // FIXED
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
