function AddTodo (){


  return <>
  
<div class ="container text-center">
  <div class="row">
    <div class="col-6">
      <input 
      type = "text"
      placeholder ="Enter TODO here"
       />
      </div>

    <div class="col-4">
      <input
      type = "date"
      />
    </div>

    <div className="col-2 mycol">
      <button type="button" class="btn btn-success mybutton">Success</button>
    </div>
  </div>
  </div>
  
  </>
}

export default AddTodo;