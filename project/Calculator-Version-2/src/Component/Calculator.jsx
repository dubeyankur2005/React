import Input from "./Input";
import Keys from "./keys";
import Container from "../Container";

function Calculator(props) {
  return (
    <>
      {/* <Container> */}
      <Input 
      displayValue={props.displayValue}>
      </Input>


      <Keys 
      button={props.button}
      setDisplayValue={props.setDisplayValue}
      displayValue={props.displayValue}
      >

      </Keys>

      {/* </Container> */}
    </>
  );
}
export default Calculator;
