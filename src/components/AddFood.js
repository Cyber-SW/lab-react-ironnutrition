import { Divider, Input } from 'antd';
import { useState } from "react"

function AddFood({ addFood }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    const [toggleBox, setToggleBox] = useState(false)

    const handleNameInput = function(event) {
        setName(event.target.value)
    }

    const handleImageInput = function(event) {
        setImage(event.target.value)
    }

    const handleCaloriesInput = function(event) {
        setCalories(event.target.value)
    }

    const handleServingsInput = function(event) {
        setServings(event.target.value)
    }



    const handleSubmit = function(event) {
        event.preventDefault()

        const newFood = { name, image, calories, servings }

        addFood(newFood)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    const toggleFoodBox = () => {
        setToggleBox(!toggleBox)
    }


    return (
        <div>
            {toggleBox && <form onSubmit={handleSubmit}>
                <Divider>Add Food Entry</Divider>

                <label>Name</label>
                <Input value={name} type="text" name="name" onChange={handleNameInput} />

                <label>Image</label>
                <Input value={image} type="text" name="image" onChange={handleImageInput} />

                <label>Calories</label>
                <Input value={calories} type="text" name="calories" onChange={handleCaloriesInput} />

                <label>Servings</label>
                <Input value={servings} type="text" name="servings" onChange={handleServingsInput} />

                <button type="submit">Create New Food</button>
            </form>}
            <button onClick={toggleFoodBox}>{toggleBox ? "Hide Form" : "Add New Food" }</button>
        </div>
    )
}

export default AddFood;