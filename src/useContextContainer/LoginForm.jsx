import React, {  useContext, useState } from 'react';

const ThemeContext = React.createContext(null);

const LoginForm = () => {
    const [theme,setTheme]=useState("grey");
    return (
    <ThemeContext.Provider value={theme}>
      <Form/>
       <label htmlFor="">
        {theme==="grey" ? "Enable Purple-Mode" : "Enable Dark-Mode"}
            <input 
                type="checkbox"
                onChange={(e)=> setTheme((prevColor)=>{
                   if(prevColor === "grey"){
                    return"purple"
                   }     
                   return "grey"
                })}
                checked={theme === "grey"}
            />
       </label> 
    </ThemeContext.Provider>
  )
}

const Form =()=>{
    return(
        <Panel text={"welcome"}>
            <Button>SignUp</Button>
            <Button>Login</Button>
        </Panel>
    )
}

const Panel =({text,children})=>{
    const theme = useContext(ThemeContext);
    const styledForm={
        backgroundColor:theme,
        color:"white" 
    }
    return(
        <div style={styledForm} className='form'>
            <h1>{text}</h1>
            <div>
                {children}
            </div>
        </div>
    ) 
}

const Button =({children})=>{
    const theme = useContext(ThemeContext);
    const styledButton={
        backgroundColor:theme,
        color:"white" 
     }
    return(
        <button className='btn' style={styledButton}>
            {children}
        </button>
    ) 
}

















export default LoginForm;
