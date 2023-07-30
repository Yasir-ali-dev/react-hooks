import React, { useState } from 'react';

const AddTask = ({onAddTask}) => {
    const [text,setText]=useState("");
  return (
    <form>
      <input 
        type="text"
        placeholder='Add Task'
        onChange={(e)=> setText(e.target.value)}
      />
      <button 
        onClick={(e)=> {
           e.preventDefault(); 
          return onAddTask(text)
        }}
       >Add</button>
    </form>
  )
}

export default AddTask;
