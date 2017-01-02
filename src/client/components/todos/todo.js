import React, { PropTypes } from 'react';
import Task from './task';

const del = () => {};

const Todo = ({ name, tasks }) =>
  <div className="todo">
    <header>
      <h1>
        {name}
      </h1>
      <button onClick={del}>
        del
      </button>
    </header>
    <div className="todo-body">
      {tasks.map((task, id) => <Task name={task.name} isChecked={task.isChecked} key={id} />)}
    </div>
  </div>
;

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

export default Todo;
