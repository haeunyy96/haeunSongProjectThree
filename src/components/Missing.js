import { useState, useEffect } from "react";
import firebase from "../firebase";

const Missing = ({list}) => {
    // const [saveList, setSaveList] = useState('');
    const handleClick = (event) => {
        console.log(event.target.value);
        // setSaveList(event.target.value);
        // array.push(event.target.value);
        // console.log(array);
    };

    // useEffect(() => {

    //     // store our db and create a reference to it
    //     const db = getDatabase(firebase);
    //     const dbRef = ref(db);

    //     onValue(dbRef, (dbResponse) => {

    //     const dbValue = dbResponse.val();
    //     console.log(dbValue);

    //     });
    // },[]);
    return (
        <> 
        <label>
            <input type="checkbox" value={list} onClick={(e)=>{handleClick(e)}} />
                <p className="groceryList">{list}</p> <br></br>
        </label>
        {/* <List sendList={saveList}/> */}
        </>
    )
}

export default Missing;