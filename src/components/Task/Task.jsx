import React from "react";
import PropTypes from 'prop-types'

import { formatDistance } from 'date-fns'

import './task.css'

const Task = (props) => {
   
    const { label, onDeleted, onToggleDone, done, timestamp } = props
   
    const time = formatDistance(timestamp, Date.now(), { includeSeconds: true, addSuffix: true })
    
    let classNames = ''
    if(done){
      classNames += 'completed'
    }
    
    return (
        <li 
          className={ classNames }
          > 
          <div 
              className="view"   
          >
            <input 
              className="toggle" 
              type="checkbox"
              checked={ done }
              onChange={ onToggleDone }  
            />
            <label
              onClick={ onToggleDone }
              onKeyDown = {() => {}}
              role="presentation"
            >
              <span 
                className="description"
                >
                  { label }
              </span>
              <span className="created">created { time }</span>
            </label>
            <button 
              type="button"
              aria-label="edit"
              className="icon icon-edit"
             />
          
            <button 
              type="button"
              aria-label="delete"
              className="icon icon-destroy"
              onClick={ onDeleted } 
              onKeyDown = {() => {}} 
             />
          </div>
      </li>
    )
  }


Task.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired, 
}

export default Task
