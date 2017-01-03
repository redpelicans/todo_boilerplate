import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

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

const RemoveButton = styled.button`
  border: none;
  width: 4em;
  height: 100%;
  cursor: pointer;
  transition: all .2s;
  font-size: 20px;
  background-color: white;
  &:hover {
    background-color: ${colors.blueGrey};
    color: white;
  }
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
  margin-top: 1em;
`;

const TodoTitle = styled.span`
  text-align: center;
  margin: 1em 0;
`;

const TaskTitle = styled.span`
  margin: 0 .5em;
`;

const drawTasks = (tasks, dispatch, actions, todoID) => tasks.map(task =>
  <TaskContainer key={task.id}>
    <TaskTitle>{task.title}</TaskTitle>
    <RemoveButton
      onClick={() => dispatch(
        actions.todo.removeTask({ taskID: task.id, todoID })
      )}
    >
      &#10006;
    </RemoveButton>
  </TaskContainer>
);

const TodoEl = ({ children, tasks, dispatch, actions, todoID }) =>
  <TodoBlock>
    <TodoTitle>{children}</TodoTitle>
    <TasksList>{drawTasks(tasks, dispatch, actions, todoID)}</TasksList>
  </TodoBlock>
;

TodoEl.propTypes = {
  children: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  todoID: PropTypes.number.isRequired,
};

export default TodoEl;
