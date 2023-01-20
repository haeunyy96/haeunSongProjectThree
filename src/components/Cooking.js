import Form from "./Form";
import RecipeBook from "./RecipeBook";
import { useState } from "react";

const Cooking = () => {
    const [newRecipes, setNewRecipes] = useState([]);
    const [userInput, setUserInput] = useState();

    async function api () {
        const url = new URL('https://api.spoonacular.com/recipes/findByIngredients');
        url.search = new URLSearchParams ({
            // apiKey: "ce490440f832431a9cdb9e690f75de8b",
            // apiKey: "ae04a816ca574350af40a091c219b089",
            // apiKey: "aad01ceb54a9479592f55feb0f1502b3",
            apiKey: "667f3f639407497bb32d9f02c53752bc",
            ingredients: userInput,
            limitLicense: true,
            number: 2
        })
        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNewRecipes(data);
            })

        };

    const addIngredient = (event, enteredIngredient) => {
        event.preventDefault();
        setUserInput(enteredIngredient);
        api();
    }

    // const display = document.querySelector(".loading")

    // function displayNone () {
    //     display.
    // }
    return (
        <section>
            <Form handleClick={addIngredient} />
            <RecipeBook recipeArray={newRecipes}/>
        </section>
    );
};

export default Cooking;