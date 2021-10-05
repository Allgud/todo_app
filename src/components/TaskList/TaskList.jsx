import React from "react";

import Task from "../ListItem/ListItem";

import './taskList.css'

const TaskList = () => {

  const items = ['Completed task', 'Editing task', 'Active task']

  return (
    <section className="main">
      <ul className="todo-list">
        <Task items={items}/>
      </ul>
    </section> 
  )
}

export default TaskList
