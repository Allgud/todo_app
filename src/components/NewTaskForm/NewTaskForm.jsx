import React from 'react'
import PropTypes from 'prop-types'

import './newTaskForm.css'

const NewTaskForm = (props) => {
    const { value, onSubmit, onLabelChange } = props
    
    return (
      <form
        className="new-todo-form"
        onSubmit={ (evt) => onSubmit(evt) }
      >
        <input
         type='text'
         className="new-todo"
         placeholder="Task"
         onChange={ (evt) => onLabelChange(evt) }
         value={ value }
        />
        <input className="new-todo-form__timer" placeholder="Min" />
        <input className="new-todo-form__timer" placeholder="Sec" />
      </form>
    )
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLabelChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default NewTaskForm
