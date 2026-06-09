
import style from "./Button.module.css"

const Button = () =>{

  const buttonName = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

  return (
    <>
      <div className={style.buttonContainer}>
      {buttonName.map(Buttons => <button className={style.button}>
        {Buttons}
      </button>)}


      </div>

    </>
  );

}

export default Button;
