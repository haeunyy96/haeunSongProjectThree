import { useState, useEffect } from "react";
import firebase from "../firebase";


const Missing = ({list}) => {
    const [saveList, setSaveList] = useState('');

    const handleClick = (event) => {
        console.log(event.target.value);
        setSaveList(event.target.value);
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
        <label className="">
            <input type="checkbox" value={list} onClick={(e)=>{handleClick(e)}}></input>
                {list} <br></br>
        </label>
        </>
    )
}

export default Missing;