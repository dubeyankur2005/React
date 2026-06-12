import { useState } from "react";

const Input = (props) => {
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");
  







  return (
    <>
    <div className="container">
  
  <div className="row">
    <div className="col-6">
      <input
          type="text"
          className="form-control input-box"
          placeholder="Enter TODO task"
          onChange={(event) =>setNewTask(event.target.value)}
          
        />
      </div>


    <div className="col-4"><input
          type="date"
          className="form-control input-box"
          placeholder="Enter TODO task"
          onChange= {(event) =>setNewDate(event.target.value)}
          
        />
        </div>


    <div className="col-2"><button type="button" className="btn btn-success add-btn"
    onClick={() => props.addTask(newTask, newDate)}
    
    >
      ➕ Add
      </button>
    </div>
  </div>
</div>
      


    </>
  );
};

export default Input;
