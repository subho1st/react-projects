import {useState} from 'react';

function Counter() {

  let [counter, setCounter] = useState(15); 

  // const addValue = () => {
  //   counter = counter + 1;
  //   setCounter(counter);
  // }

  const addValue = () => {
    if (counter === 20){
      setCounter(counter = 20)
    }
    else{
      setCounter(counter+1)
    }
  }

  // const removeValue = () => {
  //   counter = counter - 1;
  //   setCounter(counter);
  // }

  const removeValue = () => {
    if (counter === 0){
      setCounter(counter = 0)
    }
    else{
      setCounter(counter-1);
    }
    
  }


  return (
    <>
      <h1>Counter Value is {counter}</h1>
      <button type="button" onClick={addValue}>Add Value</button><br /><br />
      <button type="button" onClick={removeValue}>Remove Value</button>

      <p>{counter}</p>
    </>
  )
}

export default Counter
