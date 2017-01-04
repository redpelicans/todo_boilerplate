import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Task from './task_list';
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
  name: PropTypes.string,
};

const TaskList = ({ tasks }) =>
  <div>
    {
        Object.values(tasks).map(task =>
          <Task task={task} key={task.id} />)
    }
  </div>
;

TaskList.propTypes = {
  tasks: PropTypes.object,
};

const Todo = ({ todo, actions, store }) => {
  const bDispatch = store.dispatch.bind(store);
  return (
    <Area>
      <TitleTodo name={todo.name} />
      <AddTask onAddTask={actions.addTask} dispatch={bDispatch} />
      <TaskList tasks={todo.tasks} />
    </Area>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Todo;
