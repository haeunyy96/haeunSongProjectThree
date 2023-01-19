import Missing from "./Missing";
import Source from "./Source";
import { useState, useEffect } from "react";


const Recipe = ({id, image, title, missing}) => {
    
    const [recipeLink, setrecipeLink]= useState({});
    const [recipeInfo, setrecipeInfo]= useState({});
    // console.log(id)
    useEffect(()=>{

        const newUrl = new URL(`https://api.spoonacular.com/recipes/${id}/information`);
            console.log(newUrl);

            newUrl.search = new URLSearchParams({
                apiKey: "ae04a816ca574350af40a091c219b089",
            })
            fetch(newUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setrecipeLink(data.sourceUrl);
                    setrecipeInfo(data);
                })

    },[id])

    return (

        <li key={id} className="recipe">
            <div className="recipeImg">
                <img className="photo" src={image} alt={title} />
                <h2>{title}</h2>   
                <button className="linkBtn"><a className="link" href={recipeLink}>Go to Recipe 🍽️</a></button>
            </div>
            <div className="recipeText"> 
                <div>
                    <Source source={recipeInfo}/>
                </div>
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