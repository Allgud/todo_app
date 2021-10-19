import React from "react";
import PropTypes from 'prop-types'

import Task from "../Task/Task";

import './taskList.css'

const TaskList = (props) => {

    const { data, onDeleted, onToggleDone, 
            onToggleEdit, onEditDone, onEditChange,
          editingLabel } = props
    
    const elements = data.map((el) => {
      const { id, ...elProps } = el
      
    return (
        <Task
          key={ id }
          id = {id}
          { ...elProps }
          editingLabel = { editingLabel }
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEdit = {() => onToggleEdit(id) }
          onEditDone = { onEditDone }
          onEditChange = { onEditChange }
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
  onDeleted: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEditDone: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  editingLabel: PropTypes.string.isRequired
}


export default TaskList


