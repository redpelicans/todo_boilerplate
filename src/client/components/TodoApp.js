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
      newListTitle: '',
    };
  }

  addTasklist() {
    const newLists = this.state.lists;
    newLists[this.state.currentListId] = {
      title: this.state.newListTitle,
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

  removeTaskList(id) {
    const newLists = this.state.lists;
    delete newLists[id];
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
          onRemoveTaskList={this.removeTaskList.bind(this)} />
      </div>
    );
  }
}

export default TodoApp;
