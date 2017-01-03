import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from './todo';
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

const TodoArea = ({ name, taskName }) =>
  <Area>
    <TitleTodo name={name} />
    <AddTask />
    <Todo taskName={taskName} />
  </Area>
  ;

TitleTodo.propTypes = {
  name: PropTypes.string,
};

TodoArea.propTypes = {
  name: PropTypes.string,
};

export default TodoArea;
