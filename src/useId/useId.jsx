import React from 'react';


const useId = () => {
  const passwordHintId =React.useId();

  return (
    <>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
      <Form/>
    </>
  );
}

const Form = ()=>{
  const relatedId = React.useId()
  return (
    <form>
      <label htmlFor={`firstname-${relatedId}`}>Firstname</label>
      <input 
        type="text" 
        placeholder='FirstName' 
        id={`firstname-${relatedId}`} 
      />
      <label htmlFor={`lastname-${relatedId}`}>Lastname</label>
      <input 
        type="text" 
        placeholder='LastName' 
        id={`lastname-${relatedId}`} 
      />
    </form>
  )
}



export default useId;