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
} from '../actions';

class App extends React.Component {

  onListInput = (value) => {
    this.props.dispatch(listInput(value));
  }

  onAddList = () => {
    this.props.dispatch(addList(this.props.input));
  }

  onRemoveList = (id) => {
    this.props.dispatch(removeList(id));
  }

  addTask = (listId) => {

  }

  addTaskInput = (listId, value) => {

  }

  removeTask = (listId, taskId) => {

  }

  render() {
    return (
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList
          onAddList={this.onAddList}
          onChange={this.onListInput}
          value={this.props.input} />
        <TaskLists
          lists={this.props.lists}
          tasks={this.props.tasks}
          onAddTask={this.addTask}
          onAddTaskInput={this.addTaskInput}
          onRemoveTask={this.removeTask}
          onRemoveList={this.onRemoveList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
