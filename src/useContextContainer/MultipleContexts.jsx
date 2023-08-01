import React, {  useContext, useState } from 'react'

const CurrentUserContext=React.createContext(null);
const ThemeContext=React.createContext(null);

const MultipleContexts = () => {
    const [theme,setTheme]=useState("white");
    const [currentUser,setCurrentUser]=useState(null);

  return (
    <CurrentUserContext.Provider value={{currentUser,setCurrentUser}}>
        <ThemeContext.Provider value={theme}>
           <WelcomePanel/>
           <label htmlFor="">
            <input 
                type="checkbox"
                checked={theme === "grey" ? true :false  }
                onChange={()=>setTheme((prevTheme)=>{
                    if(prevTheme === "grey"){
                        return "white";
                    }
                    return "grey"
                })
                    
                }
            /> Enable Dark Mode
            </label> 
        </ThemeContext.Provider>
    </CurrentUserContext.Provider>
  )
}


const WelcomePanel=()=>{
    const{currentUser}=useContext(CurrentUserContext);

    return(
        <Panel title="Welcome">
            {
                currentUser !== null
                ? <Greeting/>
                : <Form/>
            }
        </Panel>
    )
}

const Panel =({title,children})=>{
    const theme= useContext(ThemeContext);
    const styled={
        backgroundColor:theme,
    }
    const styledHeading={
        color:theme === "grey" ?"white":"grey",
    }

    return(
        <section className='multi_form' style={styled}>
            <h1 style={styledHeading}>{title}</h1>
            {children}
        </section>
    )
}

const Greeting=()=>{
    const {currentUser}=useContext(CurrentUserContext);
    const theme = useContext(ThemeContext);

    const styledHeading={
        color : theme === "grey" ?"rgb(15, 214, 148)" :"grey"
    }
    return(
    <>
        <h3 
            style={styledHeading}
        >You Logged in as {currentUser.name}</h3>
    </>
    )
}

const Form=()=>{
    const {setCurrentUser}=useContext(CurrentUserContext);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const canLogin = firstName !=="" && lastName!=="";
    return(
        <form >
            <label htmlFor="firstName">
            first name: 
                <input 
                    type="text"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                />
            </label><br/>
            <label htmlFor="lastName">
            last name: 
                <input 
                    type="text"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                />
            </label>
            <label>
                <button
                    disabled={!canLogin}
                    onClick={(e)=>{
                        e.preventDefault();
                        setCurrentUser({
                            name: firstName+" "+lastName,
                        });
                    }}
                >Log In</button> {!canLogin && "Fill in both fields"}
            </label>
        </form>
    )
}





export default MultipleContexts
