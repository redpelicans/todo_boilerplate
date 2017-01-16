import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../header';
import AddTodo from '../add_todo';
import TodoList from '../todo_list';
import actionList from '../../actions';

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const App = ({ todos, actions }) =>
  <Wrapper>
    <Header />
    <AddTodo onAddTodo={actions.addTodo} />
    <TodoList todos={todos} actions={actions} />
  </Wrapper>
  ;

App.propTypes = {
  todos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionList, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
