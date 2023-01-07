import Form from "./Form";
import RecipeBook from "./RecipeBook";

// ** api call to be made only after the user's input of ingredients is entered. 

// 1. import the useState and useEffect Hooks from the react library
import { useState, useEffect } from "react";

const Cooking = () => {
    // 2. initialize state to hold the data from the API
    const [newRecipes, setNewRecipes] = useState([]);

    // 3. define a side effect which will run with a component mount
    useEffect(()=>{
        // construct a url
        const url = new URL('https://api.spoonacular.com/recipes/findByIngredients');

        console.log(url);
        // add params to the url
        url.search = new URLSearchParams ({
            apiKey: "ae04a816ca574350af40a091c219b089",
            ingredients: "egg",
            number: 5
        })

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setNewRecipes(data);
            })
    },[]);
    return (
        <section>
            <Form />
            <RecipeBook recipeArray={newRecipes}/>
        </section>
    );
}

export default Cooking;