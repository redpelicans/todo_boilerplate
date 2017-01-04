import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-bottom: 10px;
`;

class AddTask extends React.Component {
  state = { name: '' };
  handleChange = event => this.setState({ name: event.target.value })
  handleClick = () => {
    const { onAddTask, dispatch } = this.props;
    dispatch(onAddTask(this.state.name));
    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;
    const { onAddTask, dispatch } = this.props;
    return (
      <Wrapper>
        <input placeholder="todo to do ..." onChange={this.handleChange} value={name} />
        <button onClick={this.handleClick}>Add</button>
        {/* <button onClick={dispatch}>DelTodo</button> */}
      </Wrapper>
    );
  }
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default AddTask;
