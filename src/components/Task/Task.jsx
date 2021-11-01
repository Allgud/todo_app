import React, { Component } from "react";
import PropTypes from 'prop-types'

import { formatDistance } from 'date-fns'

import './task.css'



class Task extends Component {

  state = {
    minutes: 0,
    seconds: 0,
    timer: null,
  }

  componentDidUpdate(){
    const { done } = this.props
    const { timer } = this.state
    if(done){
      clearInterval(timer)
    }
  }

  startTimer = () => {
    const interval = setInterval(() => {
      let { minutes, seconds } = this.state
      seconds += 1
      if(seconds === 60){
        seconds = 0
        minutes +=1
      }
      this.setState({
        minutes,
        seconds
      })
    }, 1000)
    this.setState({
      timer: interval,
    })
  }

  pauseTimer = () => {
    const { timer } = this.state
    clearInterval(timer)
  }

   render(){
    const { minutes, seconds } = this.state
    const { label, onDeleted, onToggleDone, done, timestamp, 
      edit, onToggleEdit, onEditDone, onEditChange, editingLabel } = this.props
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
              <span className="description">
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
                  onClick={this.pauseTimer}
                />
                { minutes }:{ seconds }
              </span>
              <span 
                className="description"
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
