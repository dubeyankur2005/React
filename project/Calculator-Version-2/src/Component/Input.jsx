
import "bootstrap/dist/css/bootstrap.min.css";
const Input = (props) => {
  return (
    <>
      <div class="mb-3">
        <input
          type="text"
          class="form-control formControl"
          id="formGroupExampleInput"
        
          value ={props.displayValue}
          readOnly
        />
      </div>
    </>
  );
};

export default Input;
