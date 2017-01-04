import React, { PropTypes } from 'react';
import Todo from './todo';
import { filterTodosByMode } from '../../model';

const Todos = ({ showCompleted, todos, tasks, dispatch, actions }) =>
  <div className="todos-container">
    {filterTodosByMode(todos, tasks, showCompleted).map(
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
  showCompleted: PropTypes.bool,
  todos: PropTypes.array,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todos;
