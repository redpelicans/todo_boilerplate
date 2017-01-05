import React, { PropTypes } from 'react';
import styled from 'styled-components';
import AddTodo from './add_todo';
import Switch from './switch';
import SortTodo from './sort_todo';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

const Menu = ({ dispatch, actions, mode }) =>
  <Wrapper>
    <AddTodo dispatch={dispatch} onAdd={actions.addTodo} />
    <SortTodo
      dispatch={dispatch}
      onSwitch={actions.sortByAsc}
      sortByAsc={mode.sortByAsc}
    />
    <Switch
      dispatch={dispatch}
      onSwitch={actions.showCompleted}
      showCompletedTodos={mode.showCompletedTodos}
    />
  </Wrapper>;

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  mode: PropTypes.object.isRequired,
};

export default Menu;
