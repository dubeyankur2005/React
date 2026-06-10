import style from "./Container.module.css"

const Container =(props) =>{


  return (
    <>
    <div className ={style.box}>
      <h1>Healthy Food</h1>
      {props.children}
    </div>
    
    </>
  );
}
export default Container;