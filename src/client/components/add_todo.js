import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';

const Wrapper = styled.section`
  margin-bottom: 10px;
`;

class AddTodo extends React.Component {
  state = { name: '' };
  handleChange = event => this.setState({ name: event.target.value });
  handleClick = () => {
    const { dispatch, onAddTodo } = this.props;
    dispatch(onAddTodo(this.state.name));
    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;
    return (
      <Wrapper>
        <Input style={{ width: '35%' }} placeholder="new todo" onChange={this.handleChange} value={name} />
        <Button onClick={this.handleClick}>Add</Button>
      </Wrapper>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default AddTodo;
