

function Input(props){


  return (
  <>

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the Food"
  onKeyDown ={props.handleKeyDown}
  />
</div>

  </>
  );
}

export default Input;