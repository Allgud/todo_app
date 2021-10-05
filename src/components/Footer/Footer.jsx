import React from 'react'

import TaskFilters from '../TaskFilters/TaskFilters'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
          <span className="todo-count">1 items left</span>
          <TaskFilters />
          <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer