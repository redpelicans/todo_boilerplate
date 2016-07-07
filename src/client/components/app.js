import React from 'react'
import TaskLists from './tasklists'
import Title from './title'

const App = (props) =>
    <div className='app'>
        <Title title='App' />
        <TaskLists {...props} />
    </div>

export default App
