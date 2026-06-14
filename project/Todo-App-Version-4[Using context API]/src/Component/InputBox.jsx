import { useState } from "react";
function InputBox (props){

  return(
    <>
    
          <input type="text" class="form-control"
          onChange={(event) => props.setNewTodo(event.target.value)} />
        
    </>
  );
}

export default InputBox;