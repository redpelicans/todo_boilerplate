import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo';
import { filterTodos } from '../../model';

const FlexWrap = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Todos = ({ mode, todos, tasks, dispatch, actions }) =>
  <FlexWrap>
    {filterTodos(todos, tasks, mode).map(
      todo => <Todo
        todo={todo}
        tasks={tasks}
        dispatch={dispatch}
        actions={actions}
        key={todo.id}
      />)
    }
  </FlexWrap>
;

Todos.propTypes = {
  mode: PropTypes.object,
  todos: PropTypes.array,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todos;
