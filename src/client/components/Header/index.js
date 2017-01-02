import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

const CenteredContainer = styled.header`
  background-color: white;
  width: 90vw;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-family: Roboto, arial, verdana;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
`;

const SubTitle = styled.h3`
  color: black;
`;

const Highlighter = styled.span`
  margin: 0 10px;
  color: ${colors.blueGrey};
`;

const Header = () => (
  <CenteredContainer>
    <Title>TODO APP</Title>
    <SubTitle>
      MADE USING
      <Highlighter>Styled Component</Highlighter>
    </SubTitle>
  </CenteredContainer>
);

export default Header;
