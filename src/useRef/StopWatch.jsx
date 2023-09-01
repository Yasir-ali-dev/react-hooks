import React, { useRef, useState } from 'react';

const StopWatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart=()=>{
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        },10)   
    }

    const handleStop=()=>{
        clearInterval(intervalRef.current);
    }

    let secondsPassed=0;
    if(now !== null && startTime !== null){
        secondsPassed=(now - startTime) /1000;
    }

    return (
    <div>

       <h1>Time passed: {secondsPassed.toFixed(5)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>

    </div>
  )
}

export default StopWatch;
