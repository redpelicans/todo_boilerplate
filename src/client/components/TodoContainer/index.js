import React, { PropTypes } from 'react';
import styled from 'styled-components';

import AddTodo from '../AddTodo';
import MainContainer from '../Container';
import TodoEl from '../TodoEl';

const TodoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

const linkTasks = (id, tasks) => tasks.filter(task => task.listId === id);

const drawTodos = (todos, tasks, actions) => todos.map(todo =>
  <TodoEl
    key={todo.id}
    tasks={linkTasks(todo.id, tasks)}
    actions={actions}
    listId={todo.id}
  >
    {todo.label}
  </TodoEl>,
);

const TodoContainer = ({ todos, tasks, actions }) =>
  <MainContainer>
    <AddTodo todos={todos} actions={actions} />
    <TodoList>
      {drawTodos(todos, tasks, actions)}
    </TodoList>
  </MainContainer>
;

TodoContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoContainer;
