import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TaskList from '../TaskList/TaskList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './app.css'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

class App extends Component {

    state = {
        data: [
            {label: "Completed task", id: 1},
            {label: "Editing task", id: 2},
            {label: "Active task", id: 3},
            {label: "Something else", id: 4}
        ]
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex((el) => el.id === id )
            const newList = [
                ...data.slice(0, idx), 
                ...data.slice(idx + 1)
            ]
            return {
                data: newList
            }
        })
    }

    addItem = (text) => {
        console.log(`Added: ${text}`);
    }

    render(){

        const { data } = this.state
        return (
            <section className="todoapp">
                <Header 
                    onAdded={ this.addItem }
                />
                <NewTaskForm />
                <TaskList 
                    data={data}
                    onDeleted={ this.deleteItem }    
                />
                <Footer />
            </section>
        )
    }
}

export default App
ReactDOM.render(<App />, document.getElementById('root'))