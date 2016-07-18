import React from 'react';
import Title from './title'
import CreateList from './createlist'
import TodoList from './todolist'
import _ from 'lodash'

let taskId = 8;
let listId = 2;

export default class TodoApp extends React.Component {

  state = { listVal: '', lists: this.props.lists };

  shouldComponentUpdate = (nextProps, nextState) =>
    nextState.lists !== this.state.lists || nextState.listVal !== this.state.listVal;

  updateVal = (key) => {
    let listVal = '';
    if (key === 'Backspace') {
      listVal = this.state.listVal.slice(0, this.state.listVal.length - 1);
    }
    else {
      listVal = this.state.listVal.concat(key);
    }
    this.setState({ listVal });
  };

  onCreateList = (name) => {
    const id = listId + 1;
    const currentLists = this.state.lists;
    const lists = [...currentLists, { id, title: name, tasks: [] }];
    listId = listId + 1;
    this.setState({ lists, listVal: '' });
  };

  onCreateTask = (listId, name) => {
    const id = taskId + 1;
    const list = _.find(this.state.lists, { id: listId });
    const newTasks = [...list.tasks, { id, name }];
    const remainingLists = _.reject(this.state.lists, list => list.id === listId);
    const unsortedLists = [...remainingLists, { id: listId, title: list.title, tasks: newTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    taskId = taskId + 1;
    this.setState({ lists });
  };

  onRemoveTask = ({ listId, taskId }) => {
    const list = _.find(this.state.lists, { id: listId });
    const remainingTasks = _.reject(list.tasks, task => task.id === taskId);
    const remainingLists = _.reject(this.state.lists, list => list.id === listId);
    const unsortedLists = [...remainingLists, { id: listId, title: list.title, tasks: remainingTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    this.setState({ lists });
  };

  onRemoveList = (listId) => {
    const lists = _.reject(this.state.lists, list => list.id === listId);
    this.setState({ lists });
  };

  render() {
    return (
      <div className='todoapp'>
      <Title title='Marianne&#39;s todo list'/>
      <CreateList listVal={ this.state.listVal } onCreateList={ this.onCreateList } updateVal={ this.updateVal } />
      <TodoList { ...this.state } onCreateTask={ this.onCreateTask } onRemoveList={ this.onRemoveList }
        onRemoveTask={ this.onRemoveTask } />
      </div>
      );
  }
}

TodoApp.propTypes = {
  lists: React.PropTypes.array.isRequired,
};
