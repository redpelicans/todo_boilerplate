import React, { PropTypes } from 'react';
import Todo from './todo';
import { filterTodos } from '../../model';

const Todos = ({ mode, todos, tasks, dispatch, actions }) =>
  <div className="todos-container">
    {filterTodos(todos, tasks, mode).map(
      todo => <Todo
        todo={todo}
        tasks={tasks}
        dispatch={dispatch}
        actions={actions}
        key={todo.id}
      />)
    }
  </div>
;

Todos.propTypes = {
  mode: PropTypes.object,
  todos: PropTypes.array,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todos;
