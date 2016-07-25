import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import AddTaskList from '../components/AddTaskList';
import TaskLists from '../components/TaskLists';
import {
  listInput,
  addList,
  removeList,
  taskInput,
  addTask,
  removeTask,
} from '../actions';

const App = ({ dispatch, lists, tasks }) => {

  const onListInput = (value) => {
    dispatch(listInput(value));
  };

  const onAddList = () => {
    dispatch(addList());
  };

  const onRemoveList = (id) => {
    dispatch(removeList(id));
  };

  const onTaskInput = (listId, value) => {
    dispatch(taskInput(listId, value));
  };

  const onAddTask = (listId) => {
    dispatch(addTask(listId));
  };

  const onRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className='todo-app'>
      <Title value='Todo App' />
      <AddTaskList
        onAddList={onAddList}
        onChange={onListInput}
        value={lists.input} />
      <TaskLists
        lists={lists.data}
        onAddTask={onAddTask}
        onRemoveList={onRemoveList}
        onRemoveTask={onRemoveTask}
        onTaskInput={onTaskInput}
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
