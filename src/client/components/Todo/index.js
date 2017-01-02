import React from 'react';
import styled from 'styled-components';

import CreateTodoForm from '../CreateTodoForm';
import TodoEl from '../TodoEl';

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default class Todo extends React.Component {
  state = {
    todos: [],
    inputValue: '',
  };

  saveTodo = (e) => {
    e.preventDefault();
    const { value } = e.target.todo;
    if (!value || value === '' || value.length > 1000) return false;
    const { todos } = this.state;
    const newTodos = [e.target.todo.value, ...todos];
    this.setState({ todos: newTodos, inputValue: '' });
    return true;
  }

  updateValue = e => this.setState({ inputValue: e.target.value });

  remove = index => this.setState({
    todos: this.state.todos.filter((el, i) => index !== i),
  });

  drawTodos = todos => todos.map((el, key) =>
    <TodoEl key={key} onClick={() => this.remove(key)}>{el}</TodoEl>
  );

  render() {
    const { inputValue, todos } = this.state;
    return (
      <div>
        <CreateTodoForm
          onSubmit={this.saveTodo}
          onChange={this.updateValue}
          inputValue={inputValue}
        />
        <TodoList>
          {this.drawTodos(todos)}
        </TodoList>
      </div>
    );
  }
}
