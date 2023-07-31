import React, { useReducer, useState } from 'react';
import Modal from './Modal';

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: '',
};

const reducer =(state,action )=>{
    switch(action.type){
      case "CLOSE_MODAL":{
        return {
          people: [...state.people],
          isModalOpen : false,
          modalContent: "",
        }
      }
      case "ADD_PERSON":{
        return{
          people: [
            ...state.people,
            {id:Math.random()*1200000, name : action.name }
          ],
          isModalOpen:true,
          modalContent: `${action.name} Added`
        }
      }
      case "REMOVE_PERSON":{
        return{
          people : state.people.filter(person => person.id !== action.personId),
          modalContent:`removed Successfully`,
          isModalOpen:true,
        }
      }
      default :{
        throw Error ("Unknown Type Error");
      }
    }   
}

const UseReducerModal = () => {
  const [state,dispatch]=useReducer(reducer,defaultState);
  const [name,setName]=useState("");
  
  const handleClose=()=>{
    dispatch({type:"CLOSE_MODAL"})
  }
  
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <section>
      {
        state.isModalOpen  
        && 
        <Modal onClose={handleClose} modalContent={state.modalContent}/> 
      }
      </section>
      <form>
        <input 
          type="text"
          name='name'
          placeholder='Enter Name ..'
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />  
        <button 
          type='submit' 
          onClick={(e)=>{
            e.preventDefault();
            return dispatch({type:"ADD_PERSON",name:name})
          }}
        >Add</button>
      </form>
      <u>
        {state.people.map((person,index)=>{
          return (
            <i
                key={index} 
                style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <h3>{person.name}</h3>
              <button 
                onClick={()=> dispatch({type:"REMOVE_PERSON",personId:person.id})}
              >remove</button>
            </i>
          )
        })}
      </u>
    </div>
  )
}

export default UseReducerModal;

