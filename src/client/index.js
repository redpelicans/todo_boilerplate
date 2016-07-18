import App from './components/app'
import React from 'react'
import ReactDom from 'react-dom'
import lists from './data'

ReactDom.render(
    <App lists={lists}/>,
    document.getElementById('todo')
)
