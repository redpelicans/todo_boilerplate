import React, { PropTypes } from 'react';
import styled from 'styled-components';

import CreateTodoForm from '../CreateTodoForm';
import TodoEl from '../TodoEl';

const TodoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`;

const drawTodos = (todos, actions, dispatch) => todos.map(todo =>
  <TodoEl
    key={todo.id}
    tasks={todo.tasks}
    actions={actions}
    dispatch={dispatch}
    todoID={todo.id}
  >
    {todo.title}
  </TodoEl>
);

const TodoContainer = ({ store, actions }) =>
  <div>
    <CreateTodoForm />
    <TodoList>
      {drawTodos(store.state, actions, store.dispatch.bind(store))}
    </TodoList>
  </div>
;

TodoContainer.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoContainer;
