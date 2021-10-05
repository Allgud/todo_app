import React from 'react'

import TaskList from '../TaskList/TaskList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './app.css'

function App(){
    return (
        <section className="todoapp">
            <Header />
            <TaskList />
            <Footer />
        </section>
    )
}

export default App