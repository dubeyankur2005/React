import "../App.css"

function Foodslists (props){

  const handleClick =(food)=>{
    console.log(`bought ${food}`)
  }
  

  return (
    <>
     <div class="list-group">
        {props.items.map((Food) => (
          < div
          class="list-group-item list-group-item-action list-group-item-primary buyitem"
        >
          <span> {Food} </span>
          <button className="btn btn-success  buybutton" 
          onClick={ () =>handleClick(Food)}
          >Buy
          </button>
        </div>
        ))}
      </div>
    
    </>
  )
}

export default Foodslists;