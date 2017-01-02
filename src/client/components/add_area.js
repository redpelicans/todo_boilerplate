import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-bottom: 10px;
`;

const AddArea = () =>
  <Wrapper>
    <input placeholder="new todoArea" />
    <button>Add</button>
  </Wrapper>
  ;

export default AddArea;
