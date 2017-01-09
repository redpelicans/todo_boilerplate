import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';

const Wrapper = styled.section`
  display: flex;
  margin: 0.5em 0;
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
        <Input onChange={this.handleChange} placeholder="new task" value={name} />
        <Button type="ghost" onClick={this.handleClick}>Add</Button>
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
