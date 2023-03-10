import Recipe from "./Recipe";

const RecipeBook = ({recipeArray}) => {
    return (
        <section>
            <ul className="recipeBook">
                {
                    recipeArray.map((myRecipe)=>{
                        return <Recipe 
                            key= {myRecipe.id}
                            id= {myRecipe.id}
                            image= {myRecipe.image}
                            title= {myRecipe.title}
                            missing= {myRecipe.missedIngredients}
                        />
                    })
                }
            </ul>
        </section>
    );
}

export default RecipeBook;