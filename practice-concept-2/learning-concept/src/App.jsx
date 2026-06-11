import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import Foodslists from "./Component.jsx/FoodsList";
import ErrorMessage from "./Component.jsx/ErrorMessage";
import Input from "./Component.jsx/Input";
import { useState } from "react";

function App() {
  const [foods, setfoods] = useState([]);

  // function for adding new food

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;

      let newitem = [...foods, newFoodItem];
      setfoods(newitem);

      event.target.value = "";
    }
  };

  return (
    <center>
      <Container>
        <Input handleKeyDown={onKeyDown}></Input>

        {foods.length == "0" && <ErrorMessage />}

        <Foodslists items={foods}></Foodslists>
      </Container>
    </center>
  );
}

export default App;
