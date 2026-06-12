import Input from "./Component/Input";
import "bootstrap/dist/css/bootstrap.min.css"
import DisplayTask from "./Component/DisplayTask";

import Container from "./Container";
import { useState } from "react";
import "./App.css"

function App (){

  const [task, setTask] = useState([]);

  const addTask = (taskName, taskDate) =>{
    const newtask = {
      name : taskName,
      date: taskDate
    }

    setTask([...task, newtask])
  }

  return (
    <>
     
      <div className="todo-container">
      <h1 className="todo-heading">
  ✨ TODO App
</h1>
      
      <Container>
      <Input addTask ={addTask}></Input>

      <DisplayTask task={task}></DisplayTask>
     </Container>
     
     </div>
    
    </>
  );
}

export default App;