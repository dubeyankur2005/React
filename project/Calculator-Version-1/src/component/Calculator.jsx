import style from "./Calculator.module.css"
import Button from "./Button";


const Calculator =() =>{

  return(
    <>
    <div className= {style.Calculator}> 
    <input className={style.displayBar}/>
        <Button />
      </div>
    </>
  );
}

export default Calculator;