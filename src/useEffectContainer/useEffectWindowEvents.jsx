import React, { useEffect, useState } from 'react';


const useEffectWindowEvents = () => {
    const [position ,setPosition]=useState({ x:0, y:0});

    useEffect(()=>{
        function getPosition (e){
            setPosition({
                x: e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener("pointermove",getPosition)
        return ()=>{
            window.removeEventListener("pointermove",getPosition)
        }
        
    },[])

  return (
    <div
    
    style={{
        backgroundColor:"olive",
        position:"absolute",
        width:"40px",
        height:"40px",
        top:"0",
        left:"0",
        transform:`translate(${position.x}px,${position.y}px)`,     
        borderRadius:"50%"
    }}>
      
    </div>
  )
}

export default useEffectWindowEvents;
