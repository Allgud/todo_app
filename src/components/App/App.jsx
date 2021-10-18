import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TaskList from '../TaskList/TaskList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

import './app.css'

class App extends Component {

    state = {
        data: [
            {label: "Completed task", id: 1, done: false, timestamp: Date.now()},
            {label: "Editing task", id: 2, done: false, timestamp: Date.now()},
            {label: "Active task", id: 3, done: false, timestamp: Date.now()},
            {label: "Something else", id: 4, done: false, timestamp: Date.now()},
        ], 

        status: 'all',
        
        inputLabel: ''
    }

    createTask = (label) => ({
            label: label[0].toUpperCase() + label.slice(1).toLowerCase(),
            id: Date.now(),
            done: false,
            timestamp: Date.now()
        })

    sliceArr = (arr, index, item) => item ? [...arr.slice(0, index), item, ...arr.slice(index + 1)] : [...arr.slice(0, index), ...arr.slice(index + 1)]

    deleteItem = (id) => {
        this.setState(({data}) => {
            const newList = data.filter(el => el.id !== id)
            return {
                data: newList
            }
        })
    }

    addItem = (text) => {
        if(!text || text.trim() === '') return
        const newTask = this.createTask(text)
        this.setState(({data}) => {
            const newData = [...data, newTask]
            return {
                data: newData
            }
        })
    }

    clearCompleted = () => {
        this.setState(({ data }) => {
            const notCompleted = data.filter(el => el.done === false)
            return {
                data: notCompleted
            }
        })
    }

    onToggleDone = (id) => {
        
        this.setState(({ data }) => {  
            const index = data.findIndex(el => el.id === id)
            const old = data[index] 
            
            const newItem = {...old, done: !old.done} 
            const newArr = this.sliceArr(data, index, newItem)
            return {
                data: newArr
            }
        })
    }

    onFiltered = () => {
        const { data, status } = this.state
        if(status === 'active'){
            this.status += 'active'
            return data.filter(el => el.done !== true)
        }
        if(status === 'completed'){
            this.status += 'complete'
            return data.filter(el => el.done === true)
        }
        this.status += 'all'
        return data
    }
    
    statusListener = (str) => {
       this.setState({
           status: str
       })
    }

    onLabelChange = (evt) => {
        this.setState({
          inputLabel: evt.target.value
        })
      }

      onSubmit = (evt) => {
        const { inputLabel } = this.state
        evt.preventDefault()
        this.addItem(inputLabel)
        this.setState({
          inputLabel: ''
        })
      }


    render(){
        const { data, status, inputLabel} = this.state
    
        const filtered = this.onFiltered()
        
        return (
            <section className="todoapp">
                <Header />
                <NewTaskForm
                    onLabelChange = { this.onLabelChange } 
                    onSubmit = { this.onSubmit }
                    value={ inputLabel }
                />
                <TaskList 
                    data={ filtered }
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }    
                />
                <Footer 
                    data={ data }
                    status={ status }
                    onClearCompleted={ this.clearCompleted }
                    onFilterClick = { this.statusListener }
                />
            </section>
        )
    }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))