import React, { useEffect, useRef } from 'react'

const useEffectModelDialog = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>
        Open dialog
      </button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button onClick={() => {
          setShow(false);
        }}>Close</button>
      </ModalDialog>
    </>
  );
}
function ModalDialog({ isOpen, children }) {
    const dialogRef = useRef();
    useEffect(()=>{
        if(!isOpen){
            return
        }
        const dialog=dialogRef.current;

        dialog.showModal()
        return ()=>{
            dialog.close()
        }

    },[isOpen])

    return <dialog ref={dialogRef}>{children}</dialog>
}   
export default useEffectModelDialog;