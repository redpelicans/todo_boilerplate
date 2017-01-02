import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 10px;
  text-align: left;
  background: whitesmoke;
  border-bottom: 1px solid black;
`;

const Task = styled.p`
  display: inline;
  margin-left: 4px;
`;

const Settings = styled.div`
  float: right;
`;

const TaskElem = () => (
  <Wrapper>
    <input type="checkbox" />
    <Task>Task ...</Task>
    <Settings>
      <button>Edit</button>
      <button>Del</button>
    </Settings>
  </Wrapper>
);

export default TaskElem;
