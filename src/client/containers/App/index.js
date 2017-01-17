import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import allTheActions from '../../actions';
import Header from '../../components/Header';
import TodoContainer from '../../components/TodoContainer';
import MainContainer from '../../components/Container';

const App = ({ todos, tasks, actions }) =>
  <MainContainer>
    <Header />
    <TodoContainer todos={todos} tasks={tasks} actions={actions} />
  </MainContainer>
;

const mapStateToPros = ({ todos, tasks }) => ({ todos, tasks });
const mapDispatchToProps = dispatch => ({
  actions: {
    todo: bindActionCreators(allTheActions.todo, dispatch),
    task: bindActionCreators(allTheActions.task, dispatch),
  },
});

App.propTypes = {
  todos: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToPros, mapDispatchToProps)(App);
