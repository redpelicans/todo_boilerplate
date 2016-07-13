import React from 'react'
import TaskLists from './tasklists'
import Title from './title'
import CustomButton from './custombutton'
import Task from './task'
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.lists,
      currentTaskId: 2,
      currentListId: 3,
    }
  }

  onButtonSelected = (e, idList, idTask) => {
  	console.log(e.target);
  	console.log(e.target.name);
    const { lists, currentTaskId, currentListId } = this.state;
    if (e.target.className === 'remove') {
      console.log('remove');
      this.setState({
      	lists: {
      		...lists,
      		[idList]: {
      			...lists[idList],
      			tasks: _.omit(lists[idList].tasks, idTask),
      			}
      		}
      });
    }
    if (e.target.className === 'addlist') {
    	console.log('addlist');
    	this.setState({
      	lists: {
      		...lists,
      		[idList + 1]: {
      			id: currentListId + 1,
      			title: e.target.value,      			
      			tasks: [{id: 0, task: ' '}],
      			}
      		}
      });
    }
    if (e.target.className === 'input-task') {
    	console.log('input-task value :');
    	this.setState({
      	lists: {
      		...lists,
      		[idList]: {     			
      			...lists[idList],
      			tasks: {
      				...lists[idList].tasks,
					[currentTaskId + 1]: [{
      				id: currentTaskId + 1,
      				task: e.target.value,
      			}],
      			}
      		}
      	},
      	currentTaskId: currentTaskId + 1,
      	});
    }
  }

  handleKey = (e) => {
  	if (e.key === 'Enter') {
  		this.onButtonSelected(e);
  	}
  }

  render() {
    return (
      <div className='datApp'>
        <input placeholder='Ajouter une liste' className='addlist' onKeyPress={ this.handleKey } />
        <Title title='App' />
        <TaskLists { ...this.state } onButtonSelected={this.onButtonSelected} />
      </div>
    );
  }
}

export default App
