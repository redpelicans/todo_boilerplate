import React, { PropTypes } from 'react';
import Todo from './todo';

const Todos = ({ todos, tasks, actions }) =>
  <div className="todos-container">
    {todos.map(todo => <Todo title={todo.title} tasks={tasks} actions={actions} key={todo.id} />)}
  </div>
;

Todos.propTypes = {
  todos: PropTypes.array,
  tasks: PropTypes.array,
  actions: PropTypes.object,
};

export default Todos;
