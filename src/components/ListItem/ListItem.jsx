import React from "react";

import './listItem.css'

const Task = ({ items }) => {
    return (

        items.map(el => {
          const cls = el.split(' ')
          return (
          <li 
            className = {cls[0].toLowerCase()}
            key = {cls[0]}
          >
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{el}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
        </li>)
        })
    )
}

export default Task