import React, { PropTypes } from 'react';
import { Row, Col } from 'antd/lib/grid';
import AddTodo from './add_todo';
import FilterTodos from './filter_todos';
import SortTodos from './sort_todos';

const Menu = ({ dispatch, actions, mode }) =>
  <Row type="flex" justify="center" align="center" style={{ padding: '15px' }}>
    <Col span="12" offset="6">
      <Row type="flex" justify="center" align="center">
        <AddTodo dispatch={dispatch} onAdd={actions.addTodo} />
      </Row>
    </Col>
    <Col span="6">
      <Row type="flex" justify="center" align="bottom" gutter={16}>
        <Col>
          <SortTodos
            dispatch={dispatch}
            onSwitch={actions.sortByAsc}
            sortByAsc={mode.sortByAsc}
          />
        </Col>
        <Col>
          <FilterTodos
            dispatch={dispatch}
            onSwitch={actions.showCompleted}
            showCompletedTodos={mode.showCompletedTodos}
          />
        </Col>
      </Row>
    </Col>
  </Row>;

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  mode: PropTypes.object.isRequired,
};

export default Menu;
