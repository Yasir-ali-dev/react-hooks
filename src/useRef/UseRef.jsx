import React from 'react';
import { useEffect,useRef  } from 'react';

/** This component uses a ref to keep track of how many times the button was clicked. Note that it’s okay to use a ref instead of state here because the click count is only read and written in an event handler*/ 

const UseRef = () => {
    const intervalRef=useRef(0);

    const handleClick=()=>{
        intervalRef.current=intervalRef.current+1;
        alert(`${intervalRef.current}`)
    }

  return (
    <div>
      {/* 
      could not use useRef with screen visuals because it does not re-render*/}
      {/* <h2>{intervalRef.current}</h2> */}

      <button onClick={handleClick}>Click!</button>
    </div>
  )
}
export default UseRef;

