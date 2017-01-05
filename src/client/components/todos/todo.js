import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Task from './task';
import AddTask from './add_task';
import { filterTasksByTodoId } from '../../model';

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 1em;
  margin: 1em;
`;

const Header = styled.header`
  display: flex;
  padding: 10px;
  height: 2em;
  border-radius: 2px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #eee;
`;

const Todo = ({ todo, tasks, dispatch, actions }) =>
  <Wrapper>
    <Header>
      <h1>
        {todo.title}
      </h1>
      <AddTask dispatch={dispatch} onAdd={actions.addTask} todoId={todo.id} />
      <button onClick={() => dispatch(actions.delTodo(todo.id))}>
        supprimer
      </button>
    </Header>
    <div className="todo-body">
      <ul>
        {filterTasksByTodoId(tasks, todo.id).map(task =>
          <li key={task.id}>
            <Task
              task={task}
              dispatch={dispatch}
              onDelete={actions.delTask}
              onUpdate={actions.updateTask}
              key={task.id}
            />
          </li>
        )}
      </ul>
    </div>
  </Wrapper>
;

Todo.propTypes = {
  todo: PropTypes.object,
  tasks: PropTypes.array,
  dispatch: PropTypes.func,
  actions: PropTypes.object,
};

export default Todo;
