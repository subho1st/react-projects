import {useState} from 'react';

const Toggle = () => {
    let [show, setShow] = useState(true);
    function handleToggle(){
        setShow(!show);
    }
    
    return(
        <>
            <button type='button' onClick={handleToggle}>{show ? 'Hide' : 'Show'}</button>
            {show && <p>Your toggle content</p>}
        </>
    )
}

export default Toggle;