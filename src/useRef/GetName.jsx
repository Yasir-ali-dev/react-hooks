import React from "react";

const GetName =(props, ref)=>{
    return(
     <>
        <input type='text' {...props} ref={ref} placeholder='Name ...'/>
     </>
    )
}
export default React.forwardRef(GetName);