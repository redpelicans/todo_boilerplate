import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const Switch = ({ dispatch, switchFunc, showCompletedTodos }) =>
  <Wrapper>
    <button onClick={() => dispatch(switchFunc())}>
      {(showCompletedTodos === true) ? 'hide completed todos' : 'show completed todos'}
    </button>
  </Wrapper>
;

Switch.propTypes = {
  dispatch: PropTypes.func,
  switchFunc: PropTypes.func,
  showCompletedTodos: PropTypes.bool,
};

export default Switch;
