import React from 'react'
import Spinner from './spinner'

class NewList extends React.Component {
  static propTypes = {
    handlers: React.PropTypes.object.isRequired,
    status: React.PropTypes.object.isRequired,
  }

  state = { input: '' }

  handleInput = e => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) { return }
    this.props.handlers.onNewList(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <div className='todo-list padded'>
        <form onSubmit={ this.handleSubmit }>
          <input
            onChange={ this.handleInput }
            placeholder='New List'
            value={ this.state.input } />
          <Spinner api={ this.props.status } />
          <button type='submit'>+</button>
        </form>
        <button onClick={ this.props.handlers.fetchTasks }>Get Tasks !</button>
        <button onClick={ this.props.handlers.fetchLists }>Get Lists !</button>
      </div>
  ) }
}

export default NewList
