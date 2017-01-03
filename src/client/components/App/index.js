import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import AddTodo from '../add_todo/add_todo';
import Todos from '../todos/todos';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = ({ todos, tasks, actions }) => (
  <div className="main-container">
    <Header title="Todo APP." />
    <AddTodo addTodo={actions.addTodo} />
    <Todos todos={todos} tasks={tasks} actions={actions} />
  </div>
);

export default App;
