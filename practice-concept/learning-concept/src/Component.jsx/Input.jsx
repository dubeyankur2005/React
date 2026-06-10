

function Input(){

  const handleChange =(event) =>{
    console.log(event.target.value);
  }

  return (
  <>

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label"></label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the Food"
  onChange ={handleChange}
  />
</div>

  </>
  );
}

export default Input;