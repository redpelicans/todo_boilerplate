import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px;
  margin-top: 10px;
  text-align: center;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const TextInput = styled.input`
  margin: 0px;
  width: 85%;
  height: 25px;
`;

const AddTask = ({onAdd}) => (
  <Wrapper>
    <TextInput placeholder="Add a new Todo ..." />
    <button onClick={onAdd}>+</button>
  </Wrapper>
);


AddTask.propTypes = {
  onAdd: React.PropTypes.func,
};

export default AddTask;
