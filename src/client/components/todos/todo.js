import React, { PropTypes } from 'react';
import Task from './task';

const Todo = ({ title, tasks, actions }) =>
  <div className="todo">
    <header>
      <h1>
        {title}
      </h1>
      <button onClick={actions.delTodo}>
        del
      </button>
    </header>
    <div className="todo-body">
      {tasks.map(task => <Task title={task.title} isChecked={task.isChecked} actions={actions} key={task.id} />)}
    </div>
  </div>
;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array,
  actions: PropTypes.object,
};

export default Todo;
