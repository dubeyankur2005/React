import InputBox from "./InputBox";
import DateInputeBox from "./DateInput";
import AddButton from "./AddButton";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../store/todo-store";





function CreateTodo() {

  const [newTodo, setNewTodo] = useState([]);
  const [newDate, setNewDate] = useState([]);
  
  const {addtask} = useContext(TodoContext)
  return (
    <>
      <div class="row  todo-row">
        {/* TODO input box */}
        <div class="col-6 task-name">
          <InputBox setNewTodo={setNewTodo}></InputBox>
        </div>

        <div class="col-4 task-date">
          <DateInputeBox setNewDate ={setNewDate}></DateInputeBox>
        </div>

        <div class="col-2 add-btn">
          <AddButton 
          addtask ={addtask}
          newTodo={newTodo}
          newDate={newDate}
        
          
          
          ></AddButton>
        </div>
      </div>
    </>
  );
}

export default CreateTodo;
