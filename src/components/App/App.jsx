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
            {label: "fw", id: 1, done: false, timestamp: 1636890577423, edit: false, min: 15, sec: 0},
            {label: "fw", id: 2, done: false, timestamp: 1636890577424, edit: false, min: 10, sec: 0},
            {label: "fw", id: 3, done: false, timestamp: 1636890577425, edit: false, min: 5, sec: 0}
        ], 
        status: 'all', 
        inputLabel: '',
        editingLabel: '',
        minutes: '',
        seconds: ''
    }

    createTask = (label, mins, secs) => ({
            label: label[0].toUpperCase() + label.slice(1).toLowerCase(),
            id: Date.now(),
            done: false,
            timestamp: Date.now(),
            edit: false,
            min: mins,
            sec: secs
        })

    sliceArr = (arr, index, item) => item ? [...arr.slice(0, index), item, ...arr.slice(index + 1)] 
                                            : [...arr.slice(0, index), ...arr.slice(index + 1)]

    deleteItem = (id) => {
        this.setState(({data}) => ({
                data: data.filter(el => el.id !== id)
            }))
    }

    addItem = (text, mins, secs) => {
        if(!text || text.trim() === '') return
        this.setState(({data}) => ({
                data: [...data, this.createTask(text, mins, secs)]
            }))
    }
        

    clearCompleted = () => {
        this.setState(({ data }) => ({
                data: data.filter(el => el.done === false)
            }))
    }

    onToggleDone = (id) => {
        
        this.setState(({ data }) => ({  
           data: data.map(el => el.id === id ? {...el, done:!el.done} : el)
        }))
    }

    onFiltered = () => {
        const { data, status } = this.state
        if(status === 'active'){
            this.status += 'active'
            return data.filter(el => el.done !== true)
        }
        if(status === 'completed'){
            this.status += 'completed'
            return data.filter(el => el.done === true)
        }
        this.status += 'all'
        return data
    }
    
    statusListener = (str) => {
       this.setState({
           status: str.toLowerCase()
       })
    }

    onLabelChange = (evt) => {
        const { name, value } = evt.target 
        this.setState({ [name]: value })
      }

      onSubmit = (evt) => {
        const { inputLabel, minutes, seconds } = this.state
        evt.preventDefault()
        this.addItem(inputLabel, minutes, seconds)
        this.setState({
          inputLabel: '',
          minutes: '',
          seconds: ''
        }) 
      }

      onToggleEdit = (id) => {
        this.setState(({ data }) => ({
                data: data.map(el => el.id === id ? {...el, edit:true} : el),
                editingLabel: data.filter(el => el.id === id)[0].label
            }))
    } 
            

      handleEditingChange = (evt) => {  
        this.setState({
            editingLabel: evt.target.value
        })
      }

      handleEditDone = (evt) => {
          if(evt.keyCode === 13){
             this.setState(({data}) => {
                 const editingData = data.map((el) =>{
                     let val = evt.target.value
                    if(val.trim() === ''){
                       val = 'Empty todo'
                    } 
                    return el.edit ? {...el, edit:!el.edit, label: val} : el
                 }
                     
                 )
                 return {
                     data: editingData,
                     editingLabel: ''
                 }
             })
          }
      }

    render(){
        const { data, status, inputLabel, editingLabel, minutes, seconds } = this.state
    
        const filtered = this.onFiltered()
        
        return (
            <section className="todoapp">
                <Header />
                <NewTaskForm
                    onLabelChange = { this.onLabelChange } 
                    onSubmit = { this.onSubmit }
                    inputLabel={ inputLabel }
                    getMinutes={ this.getMinutes }
                    minutes={ minutes } 
                    seconds={ seconds } 
                />
                <TaskList 
                    data={ filtered }
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleEdit = { this.onToggleEdit }
                    onEditDone = { this.handleEditDone }
                    onEditChange = { this.handleEditingChange }
                    editingLabel = { editingLabel }
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