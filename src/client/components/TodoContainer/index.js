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
  <MainContainer>
    <AddTodo store={store} actions={actions} />
    <TodoList>
      {drawTodos(store.state, actions, store.dispatch.bind(store))}
    </TodoList>
  </MainContainer>
;

TodoContainer.propTypes = {
  store: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoContainer;
