import './App.css';

import { useState } from "react";
import { Task} from './Task.js'

function App() {

  //array of todos
  const [todoList, setTodoList] = useState([]);

  //task name
  const [newTask, setNewTask] = useState("");

  //detects changes in the input form
  const handleChange = (event) =>{
      setNewTask(event.target.value);
  }

  const addTask = () => {

    //If the todoList is not empty, the code assigns an ID that is one more than the ID of the last item in the list.
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
      taskName: newTask,
      completed: false,
    }

    setTodoList([...todoList,task]);
  }

  const completeTask = (id) => {

    setTodoList(
      todoList.map( (task) => {
        if(task.id === id){
          return {...task, completed: true}
        }else{
          return task
        }
      })
    )

  }

  const deleteTask = (id) => {
    // const newTodoList = todoList.filter( (task) => {
    //   if(task === taskName){
    //     return false ;
    //   } else {
    //     return true ;
    //   }
    // })

    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
  <div className='App'>
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="list">
      {todoList.map( (task)=>{
        return (
        <Task 
          taskName={task.taskName} 
          id={task.id}
          completed={task.completed}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
        )
      })}
    </div>
  </div>
  );
}



export default App;
