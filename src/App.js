import './App.css';
import foodsDataJSON from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFood from "./components/AddFood";
import Search from "./components/Search";
import noFoodImage from "./images/nofoodsimg.jpg";

function App() {
  const [foodsData, setFoodsData] = useState(foodsDataJSON)
  const [foods, setFoods] = useState(foodsDataJSON)

  const noFoodMessage = `Oops! There is no more content to show.`
 

  const addNewFood = function(newFood) {
    const updatedFoodsData = [...foodsData, newFood]
    const updatedFoods = [...foods, newFood]

    setFoodsData(updatedFoodsData)
    setFoods(updatedFoods)
  }

  const filterFoodList = function(str) {
    let filteredFoods

    if (str === "") {
      filteredFoods = foodsData
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    } 
    setFoods(filteredFoods)
  }

  const deleteFood = function(foodName) {
    const filteredFoodsData = foodsData.filter((food) => {
      return food.name !== foodName
    })
    const filteredFoods = foods.filter((food) => {
      return food.name !== foodName
    })
    setFoodsData(filteredFoodsData)
    setFoods(filteredFoods)
  }

  return (
    <div>
      <AddFood addFood={addNewFood} />

      <Search searchFood={filterFoodList} />

      <Divider>Food List</Divider>
      <Row>
    
        {foods.length > 0 ? foods.map((food) => {
          return (
            <Col offset={3}>
              <FoodBox food={food} deleteFood={deleteFood} />
            </Col> 
          )
        }) : <div><h1>{noFoodMessage}</h1><img src={noFoodImage} alt="nofoodimage" width={200} /></div>}
      </Row> 
    </div>
  );
}

export default App;
