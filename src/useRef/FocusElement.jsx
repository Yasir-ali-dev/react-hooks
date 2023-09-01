import React, { useEffect } from 'react'
import { useRef } from 'react'

const FocusElement = () => {

    const inputRef= useRef(null);

    const handleClick=()=>{
        inputRef.current.focus()
    }

    useEffect(()=>{
        inputRef.current.focus()    
    },[])
    

  return (
    <form>
      <input type="text" placeholder='Enter ..' ref={inputRef}  />
      <input type="button" value={"Click !"} onClick={handleClick}  />
    </form>
  )
}

export default FocusElement;
