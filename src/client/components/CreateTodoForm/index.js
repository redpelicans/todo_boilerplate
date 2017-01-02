import React, { PropTypes } from 'react';
import styled from 'styled-components';
import colors from '../../colors.json';

const FormContainer = styled.form`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  margin-top: 2em;
  width: 50vw;
  height: 50px;
`;

const TodoInput = styled.input`
  width: 80%;
  height: 2em;
  border: none;
  padding: 9px;
  font-size: 16px;
`;

const TodoSubmit = styled.input`
  border: none;
  background-color: ${colors.blueGrey};
  width: 50%;
  height: 100%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: white;
    color: ${colors.blueGrey};
  }
`;

const CreateTodoForm = ({ onSubmit, onChange, inputValue }) =>
  <FormContainer onSubmit={onSubmit}>
    <TodoInput
      placeholder="Enter your todo here"
      type="text"
      name="todo"
      value={inputValue}
      onChange={onChange}
      autoComplete="off"
    />
    <TodoSubmit type="submit" value="Save your todo" />
  </FormContainer>
;

CreateTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default CreateTodoForm;
