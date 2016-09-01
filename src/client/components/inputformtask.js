import React from 'react';

export default class InputFormTask extends React.Component {
  state = {
    input: '',
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.input !== this.state.input) {
      return true;
    }
    return false;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmitAddTask(this.props.idList, this.state.input);
    this.setState({ input: '' });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className='addtask'>
        <form onSubmit={ this.handleSubmit }>
          <input
            onChange={ this.handleChange }
            placeholder='New task...'
            type='text'
            value={ this.state.input }
          />
        </form>
      </div>
    );
  }
}

InputFormTask.propTypes = {
  idList: React.PropTypes.string.isRequired,
  onSubmitAddTask: React.PropTypes.func.isRequired,
};
