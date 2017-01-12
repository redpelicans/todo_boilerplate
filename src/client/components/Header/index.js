import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.header`
  background-color: white;
  width: 100vw;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-family: Roboto, arial, verdana;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  padding: 0;
  text-align: center;
  color: black;
`;

const Header = () => (
  <CenteredContainer>
    <Title>TODO APP</Title>
  </CenteredContainer>
);

export default Header;
