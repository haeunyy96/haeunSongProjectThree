import Missing from "./Missing";
import Source from "./Source";
import { useState } from "react";


const Recipe = ({key, image, title, missing}) => {

    // WHY AREN'T YOU RETURNING ANYTHINGGGG
    console.log(key);
    
    const [recipeLink, setrecipeLink]= useState(null);

    async function api() {
        const newUrl = 'https://api.spoonacular.com/recipes/' + { title } + '/information';

        console.log(newUrl);

        newUrl.search = new URLSearchParams({
            apiKey: "ce490440f832431a9cdb9e690f75de8b",
        })

        await fetch(newUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setrecipeLink(data);
            })

    };

    api();
    return (

        <li key={key} className="recipe">
            <div className="recipeImg">
                <img class="photo" src={image} alt={title} />
                <h2>{title}</h2>
                <p> <Source source={recipeLink}/> </p>
            </div>
            <div className="recipeText"> 

                <h4>You need to buy : </h4>
                <h5>
                    {
                        missing.map((toBuy) => {
                            return <Missing
                                list={toBuy.name}
                            />
                        })
                    }
                </h5>
            </div>

        </li>
    )
}

export default Recipe;