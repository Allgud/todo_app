import React from 'react'
import PropTypes from 'prop-types'

import './taskFilters.css'

const TaskFilters = (props) => {
  
    const buttons = document.querySelectorAll('.filters li button')
  
    const { status, statusListener } = props

    for(const btn of buttons){
      if(btn.textContent.toLowerCase() === status){
        btn.className = 'selected'
      }else {
        btn.className = ''
      }
    }
    return (
      <ul 
        className="filters"
      >
        <li>
          <button
          type="button"
          onClick = { () => statusListener('all') }
          >
            All
          </button>
        </li>
        <li >
          <button
          type="button"
           onClick = { () => statusListener('active') }
          >
            Active
          </button>
        </li>
        <li>
          <button
          type="button"
           onClick = { () => statusListener('completed') } 
          >
            Completed
          </button>
        </li>
      </ul>
    )
  } 
  
TaskFilters.propTypes = {
  status: PropTypes.string.isRequired,
  statusListener: PropTypes.func.isRequired
}


export default TaskFilters
