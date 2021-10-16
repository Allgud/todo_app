import React, { Component } from 'react'

import './taskFilters.css'

export default class TaskFilters extends Component {
  
  render(){

    const buttons = document.querySelectorAll('.filters li button')
  
    const { status, statusListener } = this.props

    for(let btn of buttons){
      if(btn.textContent.toLowerCase() === status){
        btn.className = 'selected'
      }else {
        btn.className = ''
      }
    }
    return (
      <ul 
        className="filters"
      >
        <li>
          <button
          className='selected'
          onClick = { () => statusListener('all') }
          >
            All
          </button>
        </li>
        <li >
          <button
           onClick = { () => statusListener('active') }
          >
            Active
          </button>
        </li>
        <li>
          <button
           onClick = { () => statusListener('completed') } 
          >
            Completed
          </button>
        </li>
      </ul>
    )
  }  
}
