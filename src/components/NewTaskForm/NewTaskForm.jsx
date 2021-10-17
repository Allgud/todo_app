import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './newTaskForm.css'

export default class NewTaskForm extends Component {

  state = {
    label: ''
  }

  static propTypes = {
    onAdded: PropTypes.func.isRequired
  }

  onLabelChange = (evt) => {
    this.setState({
        label: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onAdded(this.state.label)
    this.setState({
      label: ''
    })
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
         // eslint-disable-next-line jsx-a11y/no-autofocus
         autoFocus
         onChange={ this.onLabelChange }
         // eslint-disable-next-line react/destructuring-assignment
         value={this.state.label}
        />
      </form>
        
     
    )
  }
}
