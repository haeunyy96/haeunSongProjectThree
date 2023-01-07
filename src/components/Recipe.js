import Missing from "./Missing";

const Recipe = ({key, image, title, missing}) => {
    console.log(key, image, title, missing);

    // const [thingsToBuy, setThingsToBuy] = useState([missing]);

    // missing = setThingsToBuy;
    return (
        <li>
            <img src={image} />
            <h2>{title}</h2>
            {/* <Missing buy={thingsToBuy}/> */}
        </li>
    )
}

export default Recipe;