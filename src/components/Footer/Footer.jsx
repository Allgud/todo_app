/* eslint-disable react/prop-types */
import React from 'react'

import TaskFilters from '../TaskFilters/TaskFilters'

import './footer.css'

const Footer = (props) => {

      const { data, onClearCompleted, onFilterClick, status } = props
       
      return (
          <footer className="footer">
            <span className="todo-count">{data.filter(el => el.done !== true).length} items left</span>
            <TaskFilters 
                statusListener = { onFilterClick }
                status={ status }
            />
            <button 
                type="button"
                className="clear-completed"
                onClick={ onClearCompleted }
              >Clear completed
            </button>
          </footer>
      )
      
}

export default Footer
   