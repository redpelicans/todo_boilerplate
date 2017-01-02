import React from 'react';
import styled from 'styled-components';
import Header from './header';
import AddArea from './add_area';
import TodoArea from './todo_area';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const App = () => (
  <Wrapper>
    <Title>Hello World, this is my first react app!</Title>
    <Header />
    <AddArea />
    <TodoArea name="first_todo" />
    <TodoArea name="second_todo" />
  </Wrapper>
);

export default App;
