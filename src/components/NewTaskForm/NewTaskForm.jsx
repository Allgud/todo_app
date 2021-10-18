import React from 'react'
import PropTypes from 'prop-types'

import './newTaskForm.css'

const NewTaskForm = (props) => {
    const { value, onSubmit, onLabelChange } = props
    
    return (
      <form
        onSubmit={ (evt) => onSubmit(evt) }
      >
        <input
         type='text'
         className="new-todo"
         placeholder="What needs to be done?"
         onChange={ (evt) => onLabelChange(evt) }
         value={ value }
        />
      </form>
    )
}

NewTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLabelChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default NewTaskForm
