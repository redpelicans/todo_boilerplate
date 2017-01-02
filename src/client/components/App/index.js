import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Todo from '../Todo';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () =>
  <MainContainer>
    <Header />
    <Todo />
  </MainContainer>
;

export default App;
