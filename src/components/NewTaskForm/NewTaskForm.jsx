import React, { Component } from 'react'

import './newTaskForm.css'

export default class NewTaskForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
        label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.props);
  }
  
  

  render(){
     
    return (
      <form
        onSubmit={ this.onSubmit }
      >
        <input
         type='text'
         className="new-todo"
         placeholder="What needs to be done?"
         autoFocus
         onChange={ this.onLabelChange }
        />
      </form> 
    )
  }
}
