import Missing from "./Missing";
import { useState, useEffect } from "react";

const Recipe = ({id, image, title, missing}) => {

    const [recipeSummary, setrecipeSummary]= useState([]);
    const [recipeInfo, setrecipeInfo] = useState({});

    useEffect(()=>{
        const newUrl = new URL(`https://api.spoonacular.com/recipes/${id}/information`);
            newUrl.search = new URLSearchParams({
                apiKey: "667f3f639407497bb32d9f02c53752bc"
            })
            fetch(newUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setrecipeSummary((data.summary).replace(/<[^>]*>/g, ''));
                    setrecipeInfo(data);
                })
    },[id])

    return (
        <li key={id} className="recipe">
            <div className="recipeImg">
                <img className="photo" src={image} alt={title} />
                <h2>{title}</h2>
                <h6>{`${recipeInfo.servings} servings, ready in ${recipeInfo.readyInMinutes} minutes`}</h6>
                <button className="linkBtn"><a className="link" href={recipeInfo.sourceUrl}>Go to Recipe 🍽️</a></button>
            </div>
            <div className="recipeText"> 
                <div className="summaryDiv">
                    <p className="summary">{recipeSummary}</p>
                </div>
                <h4>Grocery List: </h4>
                <h5>
                    {
                        missing.map((toBuy) => {
                            return <Missing list={toBuy.name}/>
                        })
                    }
                </h5>
            </div>
        </li>
    )
}

export default Recipe;