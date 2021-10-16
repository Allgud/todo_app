import React, { Component } from 'react'

import TaskFilters from '../TaskFilters/TaskFilters'

import './footer.css'

export default class Footer extends Component {

    render(){

      const { data, onClearCompleted, onFilterClick, status } = this.props
       
      return (
          <footer className="footer">
            <span className="todo-count">{data.filter(el => el.done !== true).length} items left</span>
            <TaskFilters 
                statusListener = { onFilterClick }
                status={ status }
            />
            <button 
                className="clear-completed"
                onClick={ onClearCompleted }
              >Clear completed
            </button>
          </footer>
      )
      
    }
   
}