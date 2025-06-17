import {useState} from 'react';
import './style.css';

const Bgcolor = () => {
    let [isRed, setIsRed] = useState(true);

    function handleColor(){
        setIsRed(!isRed);
    }
    
    return(
        <>
            <button type='button' onClick={handleColor}>Bgcolor Change</button>
            <div className={isRed ? 'red' : 'blue'}>Your toggle content</div>
        </>
    )
}

export default Bgcolor;