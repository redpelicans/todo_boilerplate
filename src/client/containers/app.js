import React from 'react';
import TaskLists from '../components/tasklists';
import Title from '../components/title';
import InputFormList from '../components/inputformlist';
import Loading from '../components/loading'
import { connect } from 'react-redux';
import { addTask, removeTask, changeTask } from '../actions/task';
import { addList, removeList, changeList } from '../actions/list';
import _ from 'lodash';

const App = ({ dispatch, lists, isLoading, tasks }) => {

  const onSubmitAddTask = (idList, task) => {
    dispatch(addTask(idList, task));
  };

  const onRemoveTask = (idTask) => {
    dispatch(removeTask(idTask));
  };

  const onSubmitAddList = (input) => {
    dispatch(addList(input));
  };

  const onRemoveList = (idList) => {
    dispatch(removeList(idList));
  };

  const actions = {
    onSubmitAddList,
    onSubmitAddTask,
    onRemoveList,
    onRemoveTask,
  };

  return (
      <div className='app'>
        <Loading load={ isLoading } />
        <Title title='App' />
        <InputFormList
          onSubmitAddList={ onSubmitAddList }
        />
        <TaskLists lists={ lists } tasks={ tasks } { ...actions } />
      </div>
  );
};

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.number.isRequired,
  lists: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

export default connect(state => ({ lists: state.lists, isLoading: state.status.isLoading, tasks: state.tasks }))(App);
