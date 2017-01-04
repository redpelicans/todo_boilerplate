import React, { PropTypes } from 'react';

class AddTask extends React.Component {

  state = {
    input: '',
  };

  handleInputChange = e => this.setState({ input: e.target.value });

  handleButtonClick = () => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    dispatch(onAdd({ title: input, todoId: this.props.todoId }));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="add-task">
        <input type="text" placeholder="description tache" value={input} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>+</button>
      </div>
    );
  }
}

AddTask.propTypes = {
  todoId: PropTypes.number,
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTask;
