const Todoitem = ({item}) =>{

  return (
    <>
        <div class="row">
    <div class="col-6">
      {item.name}
    </div>


    <div class="col-4">
      {item.dueDate}
    </div>

    <div class="col-2">
    </div>
  </div>
    </>
  );
}

export default Todoitem;