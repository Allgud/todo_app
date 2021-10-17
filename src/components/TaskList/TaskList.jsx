import React from "react";
import PropTypes from 'prop-types'

import Task from "../Task/Task";

import './taskList.css'

const TaskList = (props) => {

    const { data, onDeleted, onToggleDone } = props

    // eslint-disable-next-line react/prop-types
    const elements = data.map((el, i) => {
      const { id, ...elProps } = el
      
    return (
        <Task
          // eslint-disable-next-line react/no-array-index-key
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

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired
}


export default TaskList


