import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    if(action.type === "INCREMENT_AGE"){
        return{
            age:state.age+1, 
        }
    }
    throw Error("Unknown Action")
}

const UseReducer_A = () => {
    const [state,dispatch]=useReducer(reducer,{age:78});

  return (
    <div>
      <button onClick={()=> dispatch({type:"INCREMENT_AGE"})}>Increment Age</button>
      <h1>age is {state.age}</h1>
    </div>
  )
}

export default UseReducer_A;
