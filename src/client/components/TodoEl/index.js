import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

const TodoLi = styled.li`
  list-style: none;
  width: 90%;
  height: 3em;
  font-family: Roboto, arial, verdana;
  background-color: white;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: ${colors.blueGrey};
  width: 4em;
  height: 100%;
  cursor: pointer;
  transition: all .2s;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: white;
    color: ${colors.blueGrey};
  }
`;

const TodoText = styled.span`
  margin-left: 1em;
`;

const todoEl = ({ children, onClick }) =>
  <TodoLi>
    <TodoText>{children}</TodoText>
    <RemoveButton onClick={onClick}>&#x2716;</RemoveButton>
  </TodoLi>
;

todoEl.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default todoEl;
