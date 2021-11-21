import React from "react";
import PropTypes from 'prop-types'

import { formatDistanceToNow } from 'date-fns'

import { Consumer } from '../../context'

import Timer from '../Timer/Timer'


import './task.css'

const Task = props => {

    const { ...elProps } = props 
    const { done, onDeleted, onToggleDone, onToggleEdit, 
            onEditDone, onEditChange, editingLabel, stopTimer } = props
    const { label, edit, timestamp, id } = elProps

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
            <label>
              <span 
                className="title"
                onClick={ onToggleDone }
                role="presentation"
              >
                { label }
              </span>
              <Consumer>
                  {
                   ({ data }) => {
                      const { min, sec } = data.filter(el => el.id === id)[0]
                      return (
                        <Timer 
                          min={ Number(min) }
                          sec={ Number(sec) }
                          id={ id }
                          stopTimer = { stopTimer }
                          done={ done }
                        />
                      )
                    }
                  }
              </Consumer>
              <span 
                className="description"
              >
                created { formatDistanceToNow(new Date(timestamp), { addSuffix: true }) }
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
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEditDone: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  editingLabel: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  stopTimer: PropTypes.func.isRequired
}

export default Task
