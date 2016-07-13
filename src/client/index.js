import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

// A man must have data
import fake from './data'

// A man must know how to render
const Task = ({task}) => (<li className="task">{task.id}: {task.description}</li>)

const TaskList = ({list}) => (
    <div className="todo-list">
        <div>{list.title}</div>
        <ul>{_.map(list.tasks, ((task)=>(
            <Task task={task} key={task.id} />
        )))}</ul>
    </div>
)

// A man must do what he is meant to do
const App = ({data}) => {
    return (
        <div className="app-wrapper">
            <h1>A fantastic Todo list is on its way !</h1>
            {_.map(data,
                (taskList)=>(
                    <TaskList list={taskList} key={taskList.id} />
                )
            )}
        </div>
    );
}

// .. with a little help from his frameworks
ReactDom.render(<App data={fake}/>, document.getElementById('todo'));
