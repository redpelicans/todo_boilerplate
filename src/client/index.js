import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './containers/App'

// A man must have data
import fake from './data'

// .. with a little help from his frameworks
ReactDom.render(
  <Provider>
    <App data={fake} />
  </Provider>, document.getElementById('react-wrapper')
);
