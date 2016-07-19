import React from 'react'
import ReactDom from 'react-dom'

// A man must have data
import fake from './data'

import Todo from './render'

const App = React.createClass({
  getInitialState: function() {
    return { lists: this.props.data }
  },
  render: function() {
    return (
      <div className="app-wrapper">
        <h1>A fantastic Todo is on its way !</h1>
        <Todo lists={this.state.lists} />
      </div>
    )
  }
})

// .. with a little help from his frameworks
ReactDom.render(<App data={fake}/>, document.getElementById('react-wrapper'));
