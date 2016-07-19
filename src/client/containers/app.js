/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'

import Todo from '../components/todo'

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

export default App
