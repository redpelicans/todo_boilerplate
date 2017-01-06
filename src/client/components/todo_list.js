import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TaskList from './task_list';
import AddTask from './add_task';

const Area = styled.section`
  background: white;
  border: solid black;
  width: 250px;
  padding: 1em;
  margin-bottom: 1em;
`;

const WrapTitle = styled.section`
  background: grey;
`;

const TitleTodo = ({ name }) =>
  <WrapTitle>
    <h3>{name}</h3>
  </WrapTitle>
  ;

TitleTodo.propTypes = {
  name: PropTypes.string.isRequired,
};

const Todo = ({ todo, actions, store }) => {
  const bDispatch = store.dispatch.bind(store);
  return (
    <Area>
      <TitleTodo name={todo.name} />
      <button onClick={() => bDispatch(actions.deleteTodo(todo.id))}>Del</button>
      <AddTask dispatch={bDispatch} onAddTask={actions.addTask} todoId={todo.id} />
      <TaskList actions={actions} dispatch={bDispatch} tasks={todo.tasks} todo={todo} />
    </Area>
  );
};

Todo.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Todo;
