import App from './components/app'
import React from 'react'
import ReactDom from 'react-dom'

const fake = [
    { id: 1, title: 'List1', tasks: [{ id: 1, task: '1st' },
                                    { id: 2, task: '2nd' },
                                    { id: 3, task: '3rd' }],
    },
    { id: 2, title: 'List2', tasks: [{ id: 4, task: '4th' },
                                    { id: 5, task: '5th' },
                                    { id: 6, task: '6th' }],
    },
    { id: 3, title: 'List3', tasks: [{ id: 7, task: '7th' },
                                    { id: 8, task: '8th' },
                                    { id: 9, task: '9th' }],
    },
    { id: 4, title: 'List4', tasks: [{ id: 10, task: '10th' },
                                    { id: 11, task: '11th' },
                                    { id: 12, task: '12th' }],
    },
];

ReactDom.render(
    <App lists={fake}/>,
    document.getElementById('todo')
)
