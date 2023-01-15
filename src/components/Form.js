// 1. import useState 
import { useState } from "react";


const Form = ({handleClick}) => {

    // 2. initialize state
    const [chosenIngr, setChosenIngr] = useState(null);

    const handleChange = (event) => {
        // console.log(event.target.value);
        setChosenIngr(event.target.value);
    }

    return (
        <form action="">
            <label>Enter your ingredients separated by commas! </label>
            <br></br>
            <input type="text" class="textInput" placeholder="ex. mushroom, onion" onChange={handleChange} value={chosenIngr}></input>
            <input type="submit" class="button" onClick={e => { handleClick(e, chosenIngr) }}></input>
        </form>
    );
}

export default Form;