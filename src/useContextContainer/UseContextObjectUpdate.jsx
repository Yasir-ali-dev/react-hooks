import React, { useContext, useState } from 'react';

const CurrentUserContext=React.createContext(null);

//updating object via context 
 
const UseContextObjectUpdate = () => {
    const [currentUser,setCurrentUser]=useState(null);
  return (
    <React.Fragment>
        <CurrentUserContext.Provider value={{
            currentUser,
            setCurrentUser
        }}>
            <Form/>
        </CurrentUserContext.Provider>
    </React.Fragment>
  )
}

const Form =()=>{
    return(
        <Panel title={"Message"}>
            <LoginButton />
        </Panel>
    )
}

const Panel =({children,title})=>{
    const {currentUser}=useContext(CurrentUserContext);
    console.log(currentUser);
    

    return(
        <section className='form'>
            <h3>{title}</h3>
            {children}
        </section>
    )
}

const LoginButton =()=>{
    const {setCurrentUser,currentUser} =useContext(CurrentUserContext);
    if(currentUser !== null){
        return(
            <h1>You are already Login with Alaska</h1>
        )
    }
    return(
        <Button 
            onClick={()=> setCurrentUser("Alaska") }
        >
          Login with Alaska   
        </Button>
    )
}

const Button =({children,onClick})=>{
    return(
        <button className='btn' onClick={onClick}>
          {children}  
        </button>
    )
}

export default UseContextObjectUpdate;
