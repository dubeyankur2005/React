import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import Foodslists from "./Component.jsx/FoodsList";
import Input from "./Component.jsx/Input";

function App() {
  const healthyFoods = ["Ghee", "Sabji", "Dal", "Roti", "Fruits"]



  return (
    <Container>

      <Input></Input>
      <Foodslists  items={healthyFoods}>

      </Foodslists>
      
    </Container>
  );
}

export default App;
