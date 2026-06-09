import AddTodo from "./Component/AddTodo";
import Todoitem from "./Component/Todoitem";


function App(){

  const todoItem = [
    {
      name:"Buy milk",
      dueDate:"09/06/2025",
    },
    {
      name:"Go to school",
      dueDate:"09/06/2025",
    }

  ]


  return(
    <>
    <center>
      TODO APP Version-2
      <AddTodo />
      <Todoitem item={todoItem[0]}/>
      <Todoitem item={todoItem[1]} />
    </center>
    


    </>
  );
}

export default App;