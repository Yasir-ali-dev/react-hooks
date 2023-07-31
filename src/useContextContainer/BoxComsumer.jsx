import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const BoxComsumer = () => {
   const theme = useContext(ThemeContext);
   const styled={
    backgroundColor:theme,
    width:"50px",
    color:"white"
   }; 
   return (
    <div style={styled}>
      box
    </div>
  )
}

export default BoxComsumer;
