import React, { PropTypes } from 'react';
import Task from './task';
import getTasksByTodoId from '../../model';

const Todo = ({ todo, tasks, dispatch, actions }) =>
  <div className="todo">
    <header>
      <h1>
        {todo.title}
      </h1>
      <button onClick={() => dispatch(actions.delTodo(todo.id))}>
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
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todo;
