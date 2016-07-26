import React from 'react';

class AddTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleUserInput = (e) => {
    e.preventDefault();
    this.setState({
      input: e.target.value,
    });
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.props.listId, this.state.input);
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          className='add-task'
          onChange={this.handleUserInput}
          placeholder='New task..'
          type='text'
          value={this.state.input} />
      </form>
    );
  }
}

AddTask.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
};

export default AddTask;
