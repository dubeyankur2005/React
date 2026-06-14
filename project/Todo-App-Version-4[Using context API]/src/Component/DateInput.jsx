import { useState } from "react";

function DateInputeBox (props){
  
  return (
    <>
    
          <input type="date" class="form-control"
          onChange={(event) => props.setNewDate(event.target.value)} />
        
    </>
  )
}

export default DateInputeBox;