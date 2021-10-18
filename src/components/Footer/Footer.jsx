import React from 'react'
import PropTypes from 'prop-types'

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

Footer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
}

export default Footer
   