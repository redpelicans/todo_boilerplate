import App from './components/app'
import React from 'react'
import ReactDom from 'react-dom'

const fake = [
    { id: 1, title: 'List1', tasks: [ { id: 1, task: '1st' },
    									 { id: 2, task: '2nd'},
    									 { id: 3, task: '3rd'}
    								]
    },
    { id: 2, title: 'List2', tasks: [ { id: 4, task: '4th' },
    									 { id: 5, task: '5th'},
    									 { id: 6, task: '6th'}
    								]
    }
];

ReactDom.render(
    <App lists={fake}/>,
    document.getElementById('todo')
)
