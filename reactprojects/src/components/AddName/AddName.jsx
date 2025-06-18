import { useState } from "react";


const AddName = () => {

    let [names, SetNames] = useState([]);

    const addName = () => {
        SetNames([...names, "John"]);
    };

    return(
        <>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={addName}>Add Names</button>
            <ul>
                {names.map((n,i) => <li key={i}>{n}</li>)}
            </ul>
        </>
    );


}

export default AddName;