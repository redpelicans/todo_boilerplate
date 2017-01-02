import React, { PropTypes } from 'react';
import Todo from './todo';

const Todos = ({ todos }) =>
  <div className="todos-container">
    {todos.map((todo, id) => <Todo name={todo.name} tasks={todo.tasks} key={id} />)}
  </div>
;

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
