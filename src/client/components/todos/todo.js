import React, { PropTypes } from 'react';
import Task from './task';
import AddTask from './add_task'
import filterTasksByTodoId from '../../model';

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
    <AddTask dispatch={dispatch} onAdd={actions.addTask} todoId={todo.id} />
    <div className="todo-body">
      <ul>
        {filterTasksByTodoId(tasks, todo.id).map(task =>
          <li key={task.id}>
            <Task
              task={task}
              dispatch={dispatch}
              onDel={actions.delTask}
              onEdit={actions.editTask}
              key={task.id}
            />
          </li>
        )}
      </ul>
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
