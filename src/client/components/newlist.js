import React from 'react'

class NewList extends React.Component {
  static propTypes = {
    fetchLists: React.PropTypes.func.isRequired,
    fetchTasks: React.PropTypes.func.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    inputVal: React.PropTypes.string,
    onNewList: React.PropTypes.func.isRequired,
  }

  state = { input: '' }

  handleInput = e => {
    this.setState({ input: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) { return }
    this.props.onNewList(this.state.input);
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
          <button type='submit'>+</button>
        </form>
        <button onClick={ this.props.fetchTasks }>Get Tasks !</button>
        <button onClick={ this.props.fetchLists }>Get Lists !</button>
      </div>
  ) }
}

export default NewList
