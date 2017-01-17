import React, { PropTypes } from 'react';
import styled from 'styled-components';

import AddTask from '../AddTask';
import RemoveTodo from '../RemoveTodo';
import UpdateTask from '../UpdateTask';
import UpdateTodo from '../UpdateTodo';
import Button from '../Button';

const TodoBlock = styled.li`
  list-style: none;
  font-family: Roboto, arial, verdana;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  flex-direction: column;
  margin: 2em;
  border-radius: 2px;
`;

const TaskContainer = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .2s;
`;

const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const TodoTitle = styled.span`
  margin: 1em 1em;
`;

const TaskTitle = styled.span`
  margin: 0 .5em;
  cursor: pointer;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
  color: ${props => (props.checked ? 'grey' : 'black')}
`;

const TopTodo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: rgba(0,0,0,.1);
  & button {
    background-color: rgba(0,0,0,0);
  }
`;

const TaskControls = styled.div`
  display: flex;
`;

const drawTasks = (tasks, actions) => tasks.map(task =>
  <TaskContainer key={task.id}>
    <TaskTitle
      checked={task.isCompleted}
      onClick={() => actions.task.update({
        ...task,
        isCompleted: !task.isCompleted,
      })}
    >
      {task.description}
    </TaskTitle>
    <TaskControls>
      <UpdateTask actions={actions} task={task} />
      <Button onClick={() => actions.task.remove(task.id)}>
        &#10006;
      </Button>
    </TaskControls>
  </TaskContainer>,
);

const TodoEl = ({ children, tasks, actions, listId }) =>
  <TodoBlock>
    <TopTodo>
      <TodoTitle>{children}</TodoTitle>
      <AddTask actions={actions} listId={listId} />
      <UpdateTodo actions={actions} listId={listId} label={children} />
      <RemoveTodo actions={actions} listId={listId} />
    </TopTodo>
    <TasksList>{drawTasks(tasks, actions)}</TasksList>
  </TodoBlock>
;

TodoEl.propTypes = {
  children: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  listId: PropTypes.number.isRequired,
};

export default TodoEl;
