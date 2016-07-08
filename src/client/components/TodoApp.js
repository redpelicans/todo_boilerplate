import React from 'react'
import Title from './Title'
import AddTaskList from './AddTaskList'
import TaskLists from './TaskLists'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: props.lists,
      currentListId: 5,
      newListTitle: '',
    }
  }

  addTasklist() {
    let newLists = this.state.lists
    newLists[this.state.currentListId] = {
      title: this.state.newListTitle,
      tasks: [],
    }
    this.setState({
      lists: newLists,
      currentListId: this.state.currentListId + 1,
      newListTitle: '',
    })
  }

  addTaskListInput(value) {
    this.setState({ newListTitle: value })
  }

  removeTaskList() {
    let newLists = this.state.lists
  }

  render() {
    return (
      <div className='todo-app'>
        <Title value='Todo App' />
        <AddTaskList
          onAddTaskList={this.addTasklist.bind(this)}
          onChange={this.addTaskListInput.bind(this)}
          value={this.state.newListTitle} />
        <TaskLists {...this.props} />
      </div>
    )
  }
}

export default TodoApp
