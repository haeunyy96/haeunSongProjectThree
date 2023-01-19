// 1. import useState 
import { useState } from "react";
import img from "../assets/pot.gif";

const Form = ({handleClick}) => {

    // 2. initialize state
    const [chosenIngr, setChosenIngr] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setChosenIngr(event.target.value);
    }

    return (
        <section>
            <form action="">
                <label>Enter your ingredients separated by a comma! </label>
                <br></br>
                <input type="text" className="textInput" placeholder="ex. tomato, cheese" onChange={handleChange} value={chosenIngr}></input>
                <input type="submit" className="button" onClick={e => { handleClick(e, chosenIngr) }}></input>
            </form>
            {/* <div className="loading">
                <div className="progress">
                    <div className="color">
                        <h4>LOADING...</h4>
                    </div>
                </div>
            </div>
            <div>

                <img className="pot" src={img} alt="image of pot boiling"></img>
            </div> */}
        </section>
    );
}

export default Form;