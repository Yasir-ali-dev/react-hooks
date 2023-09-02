import React from 'react'
import { TasksProvider } from './TasksContext'
import TaskList from './TaskList'
import AddTask from './AddTask'

const ReducerContext = () => {
  return (
    <TasksProvider>
     <h1>Day off in Kyoto</h1>
     <AddTask />
     <TaskList />
    </TasksProvider>
  )
}

export default ReducerContext
