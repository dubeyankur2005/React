import CreateTodo from "./Component/CreateTodo";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css"

import { useState } from "react"
import TodoList from "./Component/TodoLists";
import { TodoContext } from "./store/todo-store";

function App() {

  const[newTodoList, setNewTodoList] = useState([]);

  const addtask = (newTodo , newDate) =>{
    const newTask = {
      name : newTodo,
      date : newDate
    }

    setNewTodoList([...newTodoList, newTask])

  }
  

  return (
    <div className="todo-container">
    <h1>TODO App Version 4</h1>


    <TodoContext.Provider value = {{
      newTodoList,
      addtask

    }}
    >


     <CreateTodo> </CreateTodo>

     <TodoList></TodoList>

     </TodoContext.Provider>
    </div>
  );


}

export default App;