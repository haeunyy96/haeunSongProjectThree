import Form from "./Form";
import RecipeBook from "./RecipeBook";

// ** api call to be made only after the user's input of ingredients is entered. 

// 1. import the useState and useEffect Hooks from the react library
import { useState } from "react";

const Cooking = () => {
    // 2. initialize state to hold the data from the API
    const [newRecipes, setNewRecipes] = useState([]);

    // create a second state to capture user input
    const [userInput, setUserInput] = useState();

    // 3. create a function that holds the api, then call the function;
    async function api () {
        // construct a url
        const url = new URL('https://api.spoonacular.com/recipes/findByIngredients');

        // console.log(url);
        // add params to the url
        url.search = new URLSearchParams ({
            apiKey: "ce490440f832431a9cdb9e690f75de8b",
            ingredients: userInput,
            limitLicense: true,
            number: 10
        })

        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setNewRecipes(data);
            })

        };

    const addIngredient = (event, enteredIngredient) => {
        event.preventDefault();
        // console.log(enteredIngredient);
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