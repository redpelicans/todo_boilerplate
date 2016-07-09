import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

const testTask = {
    id: 0,
    title: 'test',
    description: 'Lorem ipsum',
    checked: false,
}

const Task = ({title, description, checked}) =>
    (<li>{title}: {description} | {checked ? 'DONE' : 'TODO'}</li>)

const App = () => (
    <ul>
        <h1> A fantastic Todo list is on its way !</h1>
        {Task(testTask)}
    </ul>
);

ReactDom.render(<App/>, document.getElementById('todo'));
