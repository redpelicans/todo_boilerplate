import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import AddTaskList from '../components/AddTaskList';
import TaskLists from '../components/TaskLists';
import Button from '../components/Button';
import {
  addList,
  removeList,
  fetchLists,
} from '../actions/lists';
import {
  addTask,
  removeTask,
  fetchTasks,
} from '../actions/tasks';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList {...this.props} />
        <Button className='refresh' onClick={this.props.fetchAll}>Refresh</Button>
        <TaskLists {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  fetchAll: React.PropTypes.func.isRequired,
  lists: React.PropTypes.object.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  lists: state.lists,
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => {
    dispatch(fetchLists());
    dispatch(fetchTasks());
  },
  onAddList: (title) => {
    dispatch(addList(title));
  },
  onRemoveList: (id) => {
    dispatch(removeList(id));
  },
  onAddTask: (listId, text) => {
    dispatch(addTask(listId, text));
  },
  onRemoveTask: (id) => {
    dispatch(removeTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
