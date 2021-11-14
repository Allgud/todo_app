import React from 'react'
import PropTypes from 'prop-types'

import './newTaskForm.css'

const NewTaskForm = (props) => {
    const { inputLabel, onSubmit, onLabelChange, minutes, seconds } = props
    
    return (
      <form
        className="new-todo-form"
        onSubmit={ (evt) => onSubmit(evt) }
      >
        <input
          type='text'
          className="new-todo"
          placeholder="Task"
          name="inputLabel"
          onChange={ (evt) => onLabelChange(evt) }
          value={ inputLabel }
          autoComplete="off"
        />
        <input 
          className="new-todo-form__timer" 
          placeholder="Min"
          name="minutes"
          onChange={ (evt) => onLabelChange(evt) }
          value={ minutes }
          autoComplete="off"
        />
        <input 
          className="new-todo-form__timer" 
          placeholder="Sec"
          name="seconds"
          onChange={ (evt) => onLabelChange(evt) }
          value={ seconds } 
          autoComplete="off"
        />
        <button className="submit" type="submit">Send</button>
      </form>  
    )
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLabelChange: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired
}

export default NewTaskForm
