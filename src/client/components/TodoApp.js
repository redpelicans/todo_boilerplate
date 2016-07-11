import React from 'react';
import _ from 'lodash';
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
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [this.state.currentListId]: {
          title: this.state.newListTitle,
          newTaskText: '',
          tasks: {},
        },
      },
      currentListId: this.state.currentListId + 1,
      newListTitle: '',
    });
  }

  addTaskListInput(value) {
    this.setState({ newListTitle: value });
  }

  removeTaskList(listId) {
    const { lists } = this.state;
    this.setState({
      lists: _.omit(lists, listId),
    });
  }

  addTask(listId) {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          tasks: {
            ...lists[listId].tasks,
            [this.state.currentTaskId]: { text: lists[listId].newTaskText }
          },
          newTaskText: '',
        },
      },
      currentTaskId: this.state.currentTaskId + 1,
    });
  }

  addTaskInput(listId, value) {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          newTaskText: value,
        },
      },
    });
  }

  removeTask(listId, taskId) {
    const { lists } = this.state;
    this.setState({
      lists: {
        ...lists,
        [listId]: {
          ...lists[listId],
          tasks: _.omit(lists[listId].tasks, taskId),
        },
      },
    });
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
