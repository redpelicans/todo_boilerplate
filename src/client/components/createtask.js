import React from 'react';

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleCreateTask = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onCreateTask(this.state.input, this.props.listId);
    this.setState({ input: '' });
  };

  handleChangeTask = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className='createtask'>
      <form onSubmit={ this.handleCreateTask } >
      <input
        onChange={ this.handleChangeTask }
        placeholder='new task'
        type='text'
        value={ this.state.input }
      />
      </form>
      </div>
    );
  }
}

CreateTask.propTypes = {
  listId: React.PropTypes.number.isRequired,
  onCreateTask: React.PropTypes.func.isRequired,
};

export default CreateTask;
