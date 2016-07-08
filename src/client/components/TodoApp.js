import React from 'react';
import Title from './Title';
import AddTaskList from './AddTaskList';
import TaskLists from './TaskLists';

class TodoApp extends React.Component {
  static propTypes = {
    lists: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      lists: props.lists,
      currentListId: 0,
      currentTaskId: 0,
      newListTitle: '',
    };
  }

  addTasklist() {
    const newLists = this.state.lists;
    newLists[this.state.currentListId] = {
      title: this.state.newListTitle,
      newTaskText: '',
      tasks: {},
    };
    this.setState({
      lists: newLists,
      currentListId: this.state.currentListId + 1,
      newListTitle: '',
    });
  }

  addTaskListInput(value) {
    this.setState({ newListTitle: value });
  }

  removeTaskList(listId) {
    const newLists = this.state.lists;
    delete newLists[listId];
    this.setState({ lists: newLists });
  }

  addTask(listId) {
    const newLists = this.state.lists;
    newLists[listId].tasks[this.state.currentTaskId] = {
      text: newLists[listId].newTaskText,
    };
    newLists[listId].newTaskText = '';
    this.setState({
      lists: newLists,
      currentTaskId: this.state.currentTaskId + 1,
    });
  }

  addTaskInput(listId, value) {
    const newLists = this.state.lists;
    newLists[listId].newTaskText = value;
    this.setState({ lists: newLists });
  }

  removeTask(listId, taskId) {
    const newLists = this.state.lists;
    delete newLists[listId].tasks[taskId];
    this.setState({ lists: newLists });
  }

  render() {
    return (
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList
          onAddTaskList={this.addTasklist.bind(this)}
          onChange={this.addTaskListInput.bind(this)}
          value={this.state.newListTitle} />
        <TaskLists
          lists={this.state.lists}
          onAddTask={this.addTask.bind(this)}
          onAddTaskInput={this.addTaskInput.bind(this)}
          onRemoveTask={this.removeTask.bind(this)}
          onRemoveTaskList={this.removeTaskList.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;
