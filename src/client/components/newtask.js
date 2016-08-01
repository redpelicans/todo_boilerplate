import React from 'react'

class NewTask extends React.Component {
  static propTypes = {
    listId: React.PropTypes.number,
    onNewTask: React.PropTypes.func,
  }
  state = { input: '' }

  handleInput = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) { return }
    this.setState({ input: '' });
    this.props.onNewTask({ description: this.state.input, listId: this.props.listId });
  }
  render() {
    return (
      <div className='flex-item padded task'>
        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleInput } placeholder='New Task' value={ this.state.input } />
          <button type='submit'>+</button>
        </form>
      </div>
    ) }
}

export default NewTask
