import React from 'react';

const TaskList = (props) => {
    const {tasks, onDeleteTask,onChangeTask,onChangeDone}=props;
    const styledContainer={
        display:"flex",
        justifyContent:"flex-start"
    };
    
  return (
    <ul>
        {tasks.map((task)=>{
            return (
                <Task 
                    onDeleteTask={onDeleteTask} 
                    onChangeTask={onChangeTask}
                    task={task}
                />
            )
        })}
    </ul>
  )
}



function Task ({
    onDeleteTask,
    onChangeTask,
    task
 }){
    const [isEditing, setIsEditing] = React.useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
          <>
            <input
              value={task.text}
              onChange={e => {
                onChangeTask({
                  ...task,
                  text: e.target.value
                });
              }} />
            <button onClick={() => setIsEditing(false)}>
              Save
            </button>
          </>
        );
      } else {
        taskContent = (
          <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        );
      }
      return (
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={e => {
              onChangeTask({
                ...task,
                done: e.target.checked
              });
            }}
          />
          {taskContent}
          <button onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
        </label>
      );
      


}



export default TaskList


