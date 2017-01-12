import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

import TodoInput from '../TodoInput';

const FormContainer = styled.form`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  margin-top: 2em;
  width: 50vw;
  height: 50px;
`;

const TodoSubmit = styled.input`
  border: none;
  background-color: ${colors.blueGrey};
  width: 50%;
  height: 100%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: white;
    color: ${colors.blueGrey};
  }
`;

export default class AddTodo extends React.Component {
  state = {
    value: '',
  }

  handleChange = e => this.setState({ value: e.target.value });

  addTodo = (e) => {
    e.preventDefault();

    const { store, actions } = this.props;
    const { dispatch } = store;
    const { value } = this.state;
    const bDispatch = dispatch.bind(store);

    if (!value) return false;

    bDispatch(actions.todo.createTodo(value));
    this.setState({ value: '' });
    return true;
  }

  render() {
    const { value } = this.state;
    return (
      <FormContainer onSubmit={this.addTodo}>
        <TodoInput
          placeholder="Enter your todo here"
          type="text"
          name="todo"
          autoComplete="off"
          value={value}
          onChange={this.handleChange}
        />
        <TodoSubmit type="submit" value="Save your todo" />
      </FormContainer>
    );
  }
}

AddTodo.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
