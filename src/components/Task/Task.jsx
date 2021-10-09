import React, { Component } from "react";

import './task.css'

export default class Task extends Component {

  state = {
    done: false,
    edit: false
  }

  onCompleted = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }

  onEdit = () => {
    this.setState(({edit}) => {
      return {
        edit: !edit
      }
    })
  }

  render(){
    const { label, onDeleted } = this.props
    const { done, edit } = this.state
    let classNames = ''
    if(done){
      classNames += 'completed'
    }

    if(edit){
      classNames += 'editing edit'
    }
    
    return (
        <li 
          className = {classNames}
          onClick = { this.onCompleted }
          >
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span 
                className="description"
                >
                  { label }
              </span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button 
              className="icon icon-edit"
              onClick = { this.onEdit }
            ></button>
            <button 
              className="icon icon-destroy"
              onClick={onDeleted}  
            ></button>
          </div>
        </li>
    )
  }
}

