import React, { PropTypes } from 'react';
import styled from 'styled-components';
import AddTodo from './add_todo';
import Switch from './switch';
// import SortTodo from './sort_todo';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const Menu = ({ dispatch, actions, switchMode }) =>
  <Wrapper>
    <AddTodo dispatch={dispatch} onAdd={actions.addTodo} />
    <Switch
      dispatch={dispatch}
      switchFunc={actions.switchMode}
      showCompletedTodos={switchMode}
    />
  </Wrapper>;

Menu.propTypes = {
  dispatch: PropTypes.func,
  actions: PropTypes.object,
  switchMode: PropTypes.bool,
};

export default Menu;
