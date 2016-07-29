import React from 'react';

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.input !== this.state.input) {
      return true;
    }
    return false;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.props.id, this.state.input);
    this.setState({ input: '' });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <h3>New Task :</h3>
        <form>
          <input onChange={this.handleChange} type='text' value={this.state.input}></input>
        </form>
      </div>);
  }
}

AddTask.propTypes = {
  id: React.PropTypes.number.isRequired,
  onAddTask: React.PropTypes.func.isRequired };
