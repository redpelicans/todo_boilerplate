import React, { PropTypes } from 'react';
import Todo from './todo';

const Todos = ({ todos, tasks, dispatch, actions }) =>
  <div className="todos-container">
    {todos.map(
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
  todos: PropTypes.array,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todos;
