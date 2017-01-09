import React, { PropTypes } from 'react';
import { Row, Col } from 'antd/lib/grid';
import Todo from './todo';
import { filterTodos } from '../../model';

const Todos = ({ mode, todos, tasks, dispatch, actions }) =>
  <Row type="flex" justify="start" align="center" gutter={16}>
    {filterTodos(todos, tasks, mode).map(
      todo => <Todo
        todo={todo}
        tasks={tasks}
        dispatch={dispatch}
        actions={actions}
        key={todo.id}
      />)
    }
  </Row>
;

Todos.propTypes = {
  mode: PropTypes.object,
  todos: PropTypes.array,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todos;
