import React,{useReducer} from 'react';

const reducer =(state,action )=>{
    switch(action.type){
        case "CHANGE_NAME":{
            return {
                ...state,
                name : action.nextName,
            }
        }
        case "INCREMENT_AGE":{
            return {
                ...state,
                age : state.age + 1,
            }
        }

        default : throw Error("Unknown Match")
    }
}
const UseReducerForm = () => {
    const initState={
        name :"Taylor",
        age:20,
    }
    const [state,dispatch]=useReducer(reducer,initState);
    const handleClick=(e)=>{
        dispatch({type:"CHANGE_NAME",nextName:e.target.value})
    }
    const handleButtonClick=(e)=>{
        e.preventDefault();
        dispatch({type:"INCREMENT_AGE"})
    }
    
  return (
    <>
    <form>
      <input 
        type="text"
        name="name"
        placeholder='Enter the name'
        value={state.name}
        onChange={handleClick}
       />
        <button type='submit' onClick={handleButtonClick}>increment age</button>
    </form>
    <div>
        <h3>{state.name} has {state.age}</h3>
    </div>
    </>
  )
}

export default UseReducerForm;