import React from 'react';
import TaskLists from './tasklists';
import Title from './title';
import _ from 'lodash';

let idTaskGlobal = 11;
let idListGlobal = 3;

class App extends React.Component {

  createList = (name) => {
    const currentLists = this.state.lists;
    const id = idListGlobal + 1;
    const lists = [...currentLists, { id, title: name, tasks: [] }];
    idListGlobal = idListGlobal + 1;
    this.setState({ lists, inputlist: '' });
  };

  createTask = (idList, task) => {
    const list = _.find(this.state.lists, { id: idList });
    const id = idTaskGlobal + 1;
    const newTasks = [...list.tasks, { id, task }];
    const remainingLists = _.reject(this.state.lists, list => list.id === idList);
    const unsortedLists = [...remainingLists, { id: idList, title: list.title, inputtask: '', tasks: newTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    idTaskGlobal = idTaskGlobal + 1;
    this.setState({ lists });
  };

  removeTask = ({ idList, idTask }) => {
    const list = _.find(this.state.lists, { id: idList });
    const remainingTasks = _.reject(list.tasks, task => task.id === idTask);
    const remainingLists = _.reject(this.state.lists, list => list.id === idList);
    const unsortedLists = [...remainingLists, { id: idList, title: list.title, inputtask: '', tasks: remainingTasks }];
    const lists = _.orderBy(unsortedLists, 'id');
    this.setState({ lists });
  };

  removeList = (idList) => {
    const lists = _.reject(this.state.lists, list => list.id === idList);
    this.setState({ lists });
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.createList(this.state.inputlist);
    }
    else if (event.key === 'Backspace') {
      this.setState({ inputlist: this.state.inputlist.slice(0, this.state.inputlist.length - 1) });
    }
    else if (event.key.length === 1) {
      this.setState({ inputlist: this.state.inputlist.concat(event.key) });
    }
  };

  handleTask = (key, idList) => {
    const list = _.find(this.state.lists, { id: idList });
    if (key === 'Enter') {
      this.createTask(idList, list.inputtask);
    }
    else if (key === 'Backspace') {
      const remainingLists = _.reject(this.state.lists, list => list.id === idList);
      const unsortedLists = [...remainingLists, { id: idList,
                                                  title: list.title,
                                                  inputtask: list.inputtask.slice(0, list.inputtask.length - 1),
                                                  tasks: list.tasks,
                                                },
                            ];
      const lists = _.orderBy(unsortedLists, 'id');
      this.setState({ lists });
    }
    else if (key.length === 1) {
      const remainingLists = _.reject(this.state.lists, list => list.id === idList);
      const unsortedLists = [...remainingLists, { id: idList,
                                                  title: list.title,
                                                  inputtask: list.inputtask.concat(key),
                                                  tasks: list.tasks,
                                                },
                            ];
      const lists = _.orderBy(unsortedLists, 'id');
      this.setState({ lists });
    }
  };

  actions = {
    createList: this.createList,
    createTask: this.createTask,
    removeTask: this.removeTask,
    removeList: this.removeList,
    handleTask: this.handleTask,
  };

  render() {
    return (
      <div className='app'>
        <Title title='App' />
        <input
          className='addlist'
          onKeyDown={ this.handleKey }
          placeholder='New tasklist...'
          value={ this.state.inputlist }
        />
        <TaskLists { ...this.state } { ...this.actions } />
      </div>
    );
  }
}

App.propTypes = {
  lists: React.PropTypes.array,
};

export default App;
