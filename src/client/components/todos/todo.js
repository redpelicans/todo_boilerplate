import React, { PropTypes } from 'react';
import Task from './task';
import getTasksByTodoId from '../../model';

const Todo = ({ todo, tasks, actions }) =>
  <div className="todo">
    <header>
      <h1>
        {todo.title}
      </h1>
      <button onClick={actions.delTodo}>
        del
      </button>
    </header>
    <div className="todo-body">
      {getTasksByTodoId(tasks, todo.id).map(task =>
        <Task title={task.title} isChecked={task.isChecked} actions={actions} key={task.id} />
      )}
    </div>
  </div>
;

Todo.propTypes = {
  todo: PropTypes.object,
  tasks: PropTypes.array,
  actions: PropTypes.object,
};

export default Todo;
