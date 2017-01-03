import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-bottom: 10px;
`;

const AddArea = ({ props }) =>
  <Wrapper>
    <input placeholder="new todoArea" />
    <button onClick={props.store.dispatch(props.actions.addArea())}>Add</button>
  </Wrapper>
  ;

export default AddArea;
