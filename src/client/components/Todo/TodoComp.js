import React from 'react';
import styled from 'styled-components';
import HeaderTask from './HeaderList';
import TaskElem from './TaskElem';

const Wrapper = styled.div`
  padding: 0px;
  background-color: whitesmoke;
  margin-top: 10px;
  text-align: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;


const TodoTask = ({name}) => (
  <Wrapper>
    <HeaderTask name={name}/>
    <TaskElem />
    <TaskElem />
    <TaskElem />
  </Wrapper>
);

export default TodoTask;
