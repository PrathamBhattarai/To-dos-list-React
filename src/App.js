import Header from './components/Header'
import AddTask from './components/AddTask'
import { useState } from 'react'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTask] = useState([
    {
    id : 1,
    text : "doctor appointment",
    day : "thursday at 2 pm",
    remainder : true,
    },
    {
    id : 2,
    text : "teacher appointment",
    day : "tuesday at 2 pm",
    remainder : false,
    },
    ])
  const [showAddTask, setShowAddTask] = useState(true);
const addtask = (task) =>{
    console.log(task);
  }
  // delte 
  const deleteTask = (id) => {
   setTask(tasks.filter((task)=> task.id !== id))
   console.log("happy")
  }
  const toggle = (id) => {
    setTask(tasks.map((task) => task.id === id ? {...task, remainder: ! task.remainder} : task ))
  }
  return (
    
    <div className = "container">
        <Header onadd = {()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onadd = {addtask} />}
      <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggle} />
    </div>
  )
}

export default App


