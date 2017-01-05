import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const Sort = ({ dispatch, onSwitch, sortByAsc }) =>
  <Wrapper>
    <button onClick={() => dispatch(onSwitch())}>
      {(sortByAsc === true) ? 'reverse sort' : 'sort'}
    </button>
  </Wrapper>
;

Sort.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  sortByAsc: PropTypes.bool.isRequired,
};

export default Sort;
