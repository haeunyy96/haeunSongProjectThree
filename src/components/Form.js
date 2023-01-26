const Form = ({handleClick, handleChange, chosenIngr}) => {


    return (
        <section className="container">
            <form action="">
                <label>Enter your ingredients separated by a comma! </label>
                <br></br>
                <input type="text" className="textInput" placeholder="ex. tomato, brie" onChange={handleChange} value={chosenIngr}></input>
                <br></br>
                <input type="submit" className="button" onClick={e => { handleClick(e, chosenIngr) }}></input>
            </form>
        </section>
    );
}

export default Form;