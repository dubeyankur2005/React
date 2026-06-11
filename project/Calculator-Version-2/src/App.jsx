import { useState } from "react";
import Calculator from "./Component/Calculator"
import Container from "./Container";

function App (){
  
  const KeysArr = ["c", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0",".", "/", "="]

  const[displayValue, setDisplayValue] = useState("")


  return (
    <>
    <Container>
      <h1>Calculator 2.0</h1>
      <Calculator 
      button={KeysArr}
      displayValue={displayValue}
      setDisplayValue={setDisplayValue}
      ></Calculator>

    </Container>
    
    
    </>
  );
}
export default App;