import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import TaskList from './task_list';
import AddTask from './add_task';

const Area = styled.li`
  background: white;
  list-style: none;
  border: solid black;
  width: 400px;
  padding: 1em;
  margin: 1em 1em 0 0;
`;

const WrapTitle = styled.section`
  background: grey;
  text-align: center;
  padding: 0.5em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const TitleTodo = ({ name }) =>
  <WrapTitle>
    <h3>{name}</h3>
  </WrapTitle>
  ;

TitleTodo.propTypes = {
  name: PropTypes.string.isRequired,
};

const Todo = ({ actions, store, todo }) => {
  const bDispatch = store.dispatch.bind(store);
  return (
    <Area>
      <TitleTodo name={todo.name} />
      <Button style={{ width: '100%' }} onClick={() => bDispatch(actions.deleteTodo(todo.id))}>Delete Todo</Button>
      <AddTask dispatch={bDispatch} onAddTask={actions.addTask} todoId={todo.id} />
      <TaskList actions={actions} dispatch={bDispatch} tasks={todo.tasks} todo={todo} />
    </Area>
  );
};

Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Todo;
