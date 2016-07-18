import React from 'react'
import TaskLists from './tasklists'
import Title from './title'
import _ from 'lodash'

let idTaskGlobal = 11;
let idListGlobal = 3;

class App extends React.Component {
  state = {
    lists: this.props.lists,
  };

  createList = (name) => {
    const id = idListGlobal + 1;
    const currentLists = this.state.lists;
    const lists = [...currentLists, { id, title: name, tasks: [] }];
    idListGlobal = idListGlobal + 1;
    this.setState({ lists });
  };

  createTask = (idList, task) => {
    const id = idTaskGlobal + 1;
    const list = _.find(this.state.lists, { id: idList });
    const newTasks = [...list.tasks, { id, task }];
    const remainingLists = _.reject(this.state.lists, list => list.id === idList);
    const unsortedLists = [...remainingLists, { id: idList, title: list.title, tasks: newTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    idTaskGlobal = idTaskGlobal + 1;
    this.setState({ lists });
  };

  removeTask = ({ idList, idTask }) => {
    const list = _.find(this.state.lists, { id: idList });
    const remainingTasks = _.reject(list.tasks, task => task.id === idTask);
    const remainingLists = _.reject(this.state.lists, list => list.id === idList);
    const unsortedLists = [...remainingLists, { id: idList, title: list.title, tasks: remainingTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    this.setState({ lists });
  };

  removeList = (idList) => {
    const lists = _.reject(this.state.lists, list => list.id === idList);
    this.setState({ lists });
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.createList(event.target.value);
    }
  };

  actions = {
    createList: this.createList,
    createTask: this.createTask,
    removeTask: this.removeTask,
    removeList: this.removeList,
  };

  render() {
    return (
      <div className='app'>
        <Title title='App' />
        <input
          className='addlist'
          onKeyPress={ this.handleKey }
          placeholder='New tasklist...'
        />
        <TaskLists lists={ this.state.lists } { ...this.actions } />
      </div>
    );
  }
}

App.propTypes = {
  lists: React.PropTypes.array,
};

export default App
