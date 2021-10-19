import React from "react";
import PropTypes from 'prop-types'

import { formatDistance } from 'date-fns'

import './task.css'

const Task = (props) => {
   
    const { label, onDeleted, onToggleDone, done, timestamp, 
            edit, onToggleEdit, onEditDone, onEditChange,
          editingLabel } = props
    let classNames = ''
    if(done){
      classNames += 'completed'
    }
    if(edit){
      classNames += 'editing'
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
              role="presentation"
            >
              <span 
                className="description"
                >
                  { label }
              </span>
              <span 
                className="created"
              >
                created { formatDistance(timestamp, Date.now(), { includeSeconds: true, addSuffix: true }) }
              </span>
            </label>
            <button 
              type="button"
              aria-label="edit"
              className="icon icon-edit"
              onClick={ onToggleEdit }
             />
          
            <button 
              type="button"
              aria-label="destroy"
              className="icon icon-destroy"
              onClick={ onDeleted } 
             />
          </div>
          <input
              className="edit" 
              type="text"
              value={ editingLabel }
              onChange={(evt) => onEditChange(evt)}
              onKeyDown={(evt) => onEditDone(evt)}
          />   
      </li>
    )
  }


Task.propTypes = {
  label: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEditDone: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  editingLabel: PropTypes.string.isRequired 
}

export default Task
