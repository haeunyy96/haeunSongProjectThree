import Missing from "./Missing";

const Recipe = ({key, image, title, missing}) => {
    // console.log(missing);
    return (

        <li key={key} className="recipe">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>You need to buy:
                {
                    missing.map((toBuy) => {
                        return <Missing
                            list={toBuy.name}
                        />
                    })
                }
            </h4>

        </li>
    )
}

export default Recipe;