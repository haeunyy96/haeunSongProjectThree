import Recipe from "./Recipe";

const RecipeBook = (recipeArray) => {

    console.log(recipeArray);
    return (
        <section>
            <ul>
                {
                    recipeArray.map((myRecipe)=>{
                        return <Recipe 
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