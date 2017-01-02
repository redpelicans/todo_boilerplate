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

const todos = [
  {
    name: 'todo_1',
    tasks: [
      {
        name: 'task_1',
        isChecked: true,
      },
      {
        name: 'task_2',
        isChecked: false,
      },
      {
        name: 'task_3',
        isChecked: false,
      },
    ],
  },
  {
    name: 'todo_2',
    tasks: [
      {
        name: 'task_1',
        isChecked: true,
      },
      {
        name: 'task_2',
        isChecked: false,
      },
      {
        name: 'task_3',
        isChecked: true,
      },
    ],
  },
];

const addTodo = () => alert('new todo');

const App = () => (
  <div className="main-container">
    <Header title="Todo APP." />
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} />
  </div>
);

export default App;
