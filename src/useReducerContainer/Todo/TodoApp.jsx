import React,{useReducer} from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';


const reducer =(state,action)=>{
    switch(action.type){
        case "DELETE_TODO":{
            return state.filter((task)=> task.id !== action.id);
        }
        case "ADD_TASK":{
            return [
                ...state,{
                id:action.id,
                text: action.text,
                done:false
                }
            ]
        }
        case "CHANGE_DONE":{
            const updatedState= state.map((task)=>{
                if(task.id === action.id){
                    return{
                        ...task,
                        done: !task.done
                    }
                }
                else{
                    return task;
                }
            })
            return updatedState;
        }
        default:{
            throw Error("Unknown Type Error");
        }
    }
}

const TodoApp = () => {
    const [state,dispatch]=useReducer(reducer, initialTasks);
    const handleChangeTask=(e)=>{
       console.log("handlleTask") 
    }

    const handleDeleteTask=(taskId)=>{
        dispatch({
            type:"DELETE_TODO",
            id:taskId
        })
    }

    const handleAddTask=(text)=>{
        dispatch({
            id:nextId++,
            text:text,
            type:"ADD_TASK"
        })
    }

    const handleChangeDone=(taskId)=>{
        dispatch({
            id:taskId,
            type:"CHANGE_DONE"
        })
    }
    

  return (
    <div>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask ={handleAddTask}/>
        <TaskList 
            tasks={state}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
            onChangeDone={handleChangeDone}
        />
    </div>
  )
}
let nextId = 3;

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];


export default TodoApp;
