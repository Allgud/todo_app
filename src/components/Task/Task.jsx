import React, { Component } from "react";
import PropTypes from 'prop-types'

import { formatDistanceToNow } from 'date-fns'

import './task.css'

class Task extends Component {

  state = {
    timer: null
  }

  componentDidUpdate(){
    const { done } = this.props
    const { timer } = this.state
    if(done){
      clearInterval(timer)
    }
  }

   render(){
    const { ...elProps } = this.props 
    const { done, onDeleted, onToggleDone, onToggleEdit, onEditDone, onEditChange, editingLabel } = this.props
    const { label, edit, timestamp, min, sec } = elProps

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
              <span className="time">
                <button 
                  className="icon icon-play" 
                  aria-label="play" 
                  type="button"
                  onClick={ this.startTimer }
                />
                <button 
                  className="icon icon-pause" 
                  aria-label="pause" 
                  type="button"
                  onClick={ this.pauseTimer }
                />
                <span className="description">
                  { (min >= 10) ? min : `0${min}`}:{ (sec >= 10) ? sec : `0${sec}`}
                </span>
              </span>
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
}


Task.propTypes = {
  
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func.isRequired,
  onEditDone: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  editingLabel: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default Task
