import React from "react";

import Task from "../Task/Task";

import './taskList.css'

const TaskList = (props) => {

  const { data, onDeleted } = props
  
  return (
    <section className="main">
      <ul className="todo-list">
        {data.map(el => {
          return (
          <Task 
            label={el.label}
            key={el.id}
            onDeleted={() => onDeleted(el.id)}
          />)
        })}
      </ul>
    </section> 
  )
}

export default TaskList
