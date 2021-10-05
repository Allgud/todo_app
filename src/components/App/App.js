import React from 'react'

import TaskList from '../TaskList/TaskList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function App(){
    return (
        <div>
            <Header />
            <TaskList />
            <Footer />
        </div>
    )
}

export default App