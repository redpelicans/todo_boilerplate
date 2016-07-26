import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import AddTaskList from '../components/AddTaskList';
import TaskLists from '../components/TaskLists';
import {
  addList,
  removeList,
  fetchLists,
} from '../actions/lists';
import {
  taskInput,
  addTask,
  removeTask,
} from '../actions/tasks';

const App = ({ dispatch, lists, tasks }) => {

  const onAddList = (title) => {
    dispatch(addList(title));
  };

  const onRemoveList = (id) => {
    dispatch(removeList(id));
  };

  const onAddTask = (listId, text) => {
    dispatch(addTask(listId, text));
  };

  const onRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className='todo-app'>
      <Title value='Todo App' />
      <AddTaskList onAddList={onAddList} />
      <TaskLists
        lists={lists.data}
        onAddTask={onAddTask}
        onRemoveList={onRemoveList}
        onRemoveTask={onRemoveTask}
        tasks={tasks} />
    </div>
  );
};

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  lists: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  tasks: state.tasks,
});

export default connect(mapStateToProps)(App);
