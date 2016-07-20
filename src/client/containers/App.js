import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
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
  }

  const onAddList = () => {
    dispatch(addList(lists.input));
  }

  const onRemoveList = (id) => {
    dispatch(removeList(id));
  }

  const onTaskInput = (listId, value) => {
    dispatch(taskInput(listId, value));
  }

  const onAddTask = (listId) => {
    dispatch(addTask(listId, lists.data[listId].newTaskText));
  }

  const onRemoveTask = (id) => {
    dispatch(removeTask(id));
  }

  return (
    <div className='todo-app'>
      <Title value='Todo App' />
      <AddTaskList
        onAddList={onAddList}
        onChange={onListInput}
        value={lists.input} />
      <TaskLists
        lists={lists.data}
        tasks={tasks}
        onAddTask={onAddTask}
        onTaskInput={onTaskInput}
        onRemoveTask={onRemoveTask}
        onRemoveList={onRemoveList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
