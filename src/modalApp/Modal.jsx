import React, { useEffect } from 'react';

const Modal = ({modalContent,onClose}) => {
   useEffect(()=>{
    setTimeout(()=>{
        onClose();
    },2000)
   },[]);

  return (
    <div className='Modal'> 
      <h3>{modalContent}</h3>
    </div>
  )
}

export default Modal;
