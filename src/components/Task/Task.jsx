/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
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
              type="checkbox" />
            <label
              onClick={ onToggleDone }
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
              className="icon icon-edit"
             />
          
            <button 
              type="button"
              className="icon icon-destroy"
              onClick={ onDeleted }  
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
  timestamp: PropTypes.number.isRequired
}

export default Task
