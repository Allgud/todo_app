import React from "react";

import Task from "../ListItem/ListItem";

import './taskList.css'

const TaskList = () => {
  return (
    <section className="main">
      <ul className="todo-list">
        <Task />
      </ul>
    </section> 
  )
}

export default TaskList
