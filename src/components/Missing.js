const Missing = ({list}) => {

    return (
        <> 
        <label>
            <input type="checkbox" value={list} />
                <p className="groceryList">{list}</p> <br></br>
        </label>
        </>
    )
}

export default Missing;