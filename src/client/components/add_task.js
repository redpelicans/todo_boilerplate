import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-bottom: 10px;
`;

class AddTask extends React.Component {
  state = { name: '' };
  handleChange = event => this.setState({ name: event.target.value })
  handleClick = () => {
    const { onAddTask, dispatch, todoId } = this.props;
    dispatch(onAddTask(this.state.name, todoId));
    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;
    return (
      <Wrapper>
        <input onChange={this.handleChange} placeholder="new task" value={name} />
        <button onClick={this.handleClick}>Add</button>
      </Wrapper>
    );
  }
}

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  todoId: PropTypes.number.isRequired,
};

export default AddTask;
