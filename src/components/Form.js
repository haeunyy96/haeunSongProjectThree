// 1. import useState 
import { useState } from "react";
import img from "../assets/pot.gif";

const Form = ({handleClick}) => {

    // 2. initialize state
    const [chosenIngr, setChosenIngr] = useState(null);

    const handleChange = (event) => {
        // console.log(event.target.value);
        setChosenIngr(event.target.value);
    }

    return (
        <section>
            <form action="">
                <label>Enter your ingredients separated by commas! </label>
                <br></br>
                <input type="text" class="textInput" placeholder="ex. mushroom, onion" onChange={handleChange} value={chosenIngr}></input>
                <input type="submit" class="button" onClick={e => { handleClick(e, chosenIngr) }}></input>
            </form>
            {/* <div class="loading">
                <div class="progress">
                    <div class="color">
                        <h4>LOADING...</h4>
                    </div>
                </div>
            </div>
            <div>

                <img class="pot" src={img} alt="image of pot boiling"></img>
            </div> */}
        </section>
    );
}

export default Form;