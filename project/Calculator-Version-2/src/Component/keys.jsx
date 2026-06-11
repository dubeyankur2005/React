import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Keys =(props) =>{
  console.log("button is"+props.button);


  const handleButtonClick =(item) =>{
    if(item === "=") {
      props.setDisplayValue(eval(props.displayValue));

    }
    else if(item === "c"){
      props.setDisplayValue("");

    }
    else{
      props.setDisplayValue((preValue) =>{
        return preValue + item
      })

    }

  }
  return (

    
  
    <div className="buttonContainer">
      {props.button.map ((item) =>{

      //   let buttonClass = "btn btn-secondary mybutton";

      // if(item === "="){
      //   buttonClass = "btn btn-success mybutton";
      // }

      // else if(item === "c"){
      //   buttonClass = "btn btn-danger mybutton";
      // }

      // else if(["+", "-", "*", "/"].includes(item)){
      //   buttonClass = "btn btn-primary mybutton";
      // }

let buttonClass = "numberBtn mybutton";

if (item === "=") {
  buttonClass = "equalBtn mybutton";
}
else if (item === "c") {
  buttonClass = "clearBtn mybutton";
}
else if (["+", "-", "*", "/"].includes(item)) {
  buttonClass = "operatorBtn mybutton";
}



      return (
        
        <button type="button"
        key={item}
        className ={buttonClass}
        // class="btn btn-light mybutton"
        
         onClick={() => handleButtonClick(item)}
         
        >{item}</button>
      
      )
    })}


    </div>
    
   
  )
}

export default Keys;