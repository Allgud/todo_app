import React from 'react'
import PropTypes from 'prop-types'

import './taskFilters.css'

const TaskFilters = (props) => {
  
    const { status, statusListener } = props

    const buttonsValues = ['All', 'Active', 'Completed'].map((btn, i) => {
      const index = i + 1
      let classNames =  ''
      if(status === btn.toLowerCase()){
        classNames += 'selected'
      }
      return (
      <li key = {index}>
        <button
          className={ classNames }
          type="button"
          onClick = { (evt) => statusListener(evt.target.textContent) }
        >
          { btn }
        </button>
      </li>
    )})

    return (
      <ul 
        className="filters"
      >
       { buttonsValues }
      </ul>
    )
  } 
  
TaskFilters.propTypes = {
  status: PropTypes.string.isRequired,
  statusListener: PropTypes.func.isRequired
}


export default TaskFilters
