import React from 'react';
import TaskLists from '../components/tasklists';
import Title from '../components/title';
import InputFormList from '../components/inputformlist';
import Loading from '../components/loading'
import { connect } from 'react-redux';
import { addTask, removeTask, changeTask } from '../actions/task';
import { addList, removeList, changeList } from '../actions/list';
import _ from 'lodash';

const App = ({ dispatch, inputlist, isLoading, lists, tasks }) => {

  const onChangeTask = (idList, inputtask) => {
    dispatch(changeTask(idList, inputtask));
  };

  const onSubmitAddTask = (idList, idTask) => {
    dispatch(addTask(idList, idTask));
  };

  const onRemoveTask = (idTask) => {
    dispatch(removeTask(idTask));
  };

  const onChangeList = (inputlist) => {
    dispatch(changeList(inputlist));
  };

  const onSubmitAddList = () => {
    dispatch(addList());
  };

  const onRemoveList = (idList) => {
    dispatch(removeList(idList));
  };

  const actions = {
    onChangeList,
    onChangeTask,
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
          value={ inputlist }
          { ...actions }
        />
        <TaskLists lists={ lists } tasks={ tasks } { ...actions } />
      </div>
  );
};

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  inputlist: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.number.isRequired,
  lists: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

export default connect(state => ({ lists: state.lists, inputlist: state.inputlist, tasks: state.tasks, isLoading: state.isLoading }))(App);
