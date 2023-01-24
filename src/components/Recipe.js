import Missing from "./Missing";
import img from "../Animated-Down-Arrow.gif"
import { useState, useEffect } from "react";

const Recipe = ({id, image, title, missing}) => {

    const [recipeSummary, setrecipeSummary]= useState([]);
    const [recipeInfo, setrecipeInfo] = useState({});
    const [showMore, setShowMore] = useState(false);
     
    useEffect(()=>{
        const newUrl = new URL(`https://api.spoonacular.com/recipes/${id}/information`);
            newUrl.search = new URLSearchParams({
                apiKey: "ce490440f832431a9cdb9e690f75de8b"
            })
            fetch(newUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setrecipeInfo(data);
                    setrecipeSummary((data.instructions).replace(/<[^>]*>/g, ''));
                })
    },[id])

    return (
        <li id="here" key={id} className="recipe">
            <div className="recipeBox">
                <div className="recipeImg">
                    <img className="photo" src={image} alt={title} />
                </div>
                <div className="recipeText">
                    <div className="spanDiv"><span className="recipeTitle">{title}</span></div>
                    <h6>{`${recipeInfo.servings} servings · Ready in ${recipeInfo.readyInMinutes} mins`}</h6>
                    <div>
                        <hr></hr>
                        <div className="summaryDiv">
                            <p className="summary">{recipeSummary}</p>
                        </div>
                        <button className="linkBtn"><a className="link" href={recipeInfo.sourceUrl} target="_blank">See full Recipe</a></button>
                    </div>
                    <button className="triangle" onClick={() => setShowMore(!showMore)}>
                        <h6 className="readMore">SHOW GROCERY LIST</h6>
                        <img src={img} alt="downward arrow" />
                    </button>
                    {
                        showMore ? <h5>
                            {
                                missing.map((toBuy) => {
                                    return <Missing list={toBuy.name} />
                                })
                            }
                        </h5>
                            : null
                    }
                </div>
            </div>
        </li>
    )
}

export default Recipe;