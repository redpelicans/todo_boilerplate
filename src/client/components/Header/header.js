import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  color: darkgrey;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: whitesmoke;
`;

const HeaderTodo = () => (
  <Wrapper>
    <Title>ToDo App</Title>
  </Wrapper>
);

export default HeaderTodo;
