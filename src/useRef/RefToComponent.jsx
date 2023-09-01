import React, { useRef } from 'react';
import GetName from './GetName';



const RefToComponent = () => {
  const componentRef=useRef(null);

  const handleClick=()=>{
    componentRef.current.focus()
  }

  return (
    <div>
      <GetName ref={componentRef}/> 
      <button onClick={handleClick}>Focus on Component</button>
    </div>
  )
}



export default RefToComponent;


