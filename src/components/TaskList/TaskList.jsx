import React, { Component } from "react";

import Task from "../Task/Task";

import './taskList.css'

export default class TaskList extends Component {

  render(){
    const { data, onDeleted, onToggleDone } = this.props

    const elements = data.map((el, i) => {
      const { id, ...elProps } = el
      
    return (
        <Task
          key={ i }
          { ...elProps }
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
        />
    )
  })
  
  return (
    <section className="main">
      <ul className="todo-list">
        {elements}
      </ul>
    </section> 
  )
  }  
}


