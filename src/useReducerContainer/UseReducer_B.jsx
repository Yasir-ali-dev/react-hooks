import React,{useReducer} from 'react'


const reducer =(state,action )=>{
    switch(action.type){
        case "INCREMENT_AGE":{
            return{
                ...state,
               age : state.age+1,     
            }
        }
        case "DECREMENT_AGE":{
            return {
                ...state,
                age:state.age-1,
            }
        }
        case "AGE_ZERO":{
            return{
                ...state,
                age:0,
            }
        }
        case "CHANGE_NAME":{
            return{
                ...state,
                name:"Arslan"
            }
        }
        default : throw Error("Unknown Action")
    }   
}

const UseReducer_B = () => {
   const initState={
    age:20,
    name:"aslam"
  };

  const [state, dispatch]=useReducer(reducer,initState);
  return (
    <div>
      <button onClick={()=>dispatch({type: "INCREMENT_AGE"}) } >Increment Age</button>
      <button onClick={()=>dispatch({type: "DECREMENT_AGE"}) } >decrement Age</button>
      <button onClick={()=>dispatch({type: "AGE_ZERO"}) } >Age ZERO</button>
      <button onClick={()=>dispatch({type: "CHANGE_NAME"}) } >change Name</button>
      
      <h1>{state.name} has age {state.age}</h1>
    </div>
  )
}

export default UseReducer_B;
