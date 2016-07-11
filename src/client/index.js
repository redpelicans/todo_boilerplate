import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

// A man must have data
import fake from './data'

// A man must know how to render
const Task = ({id, description}) => (<li>{id}: {description}</li>)

const TaskList = (list) => (
    <div>
        <div>{list.title}</div>
        <ul>{_.map(list.tasks, Task)}</ul>
    </div>
)

// A man must do what he is meant to do
const App = ({data}) => {
    console.log(_.map(data));
    return (
        <div>
            <h1> A fantastic Todo list is on its way !</h1>
            {_.map(data, TaskList)}
        </div>
    );
}

// .. with a little help from his frameworks
ReactDom.render(<App data={fake}/>, document.getElementById('todo'));
