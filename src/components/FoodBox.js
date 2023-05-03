import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox({ food, deleteFood }) {
    const handleDelete = function(name) {

        deleteFood(name)
    }

    return (
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p><b>Total Calories: {food.calories} * {food.servings} </b> kcal</p>
            <Button type="primary" onClick={() => handleDelete(food.name)}> Delete </Button>
        </Card>
    )

}

export default FoodBox;