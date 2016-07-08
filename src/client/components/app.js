import React from 'react'
import TaskLists from './tasklists'
import Title from './title'
import CustomButton from './custombutton'
import Task from './task'
var _ = require('lodash');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonSelected = this.onButtonSelected.bind(this);
    this.state = {
      onClick: false,
      onEnter: false,
      app: { lists: _.reduce({...this.props}, 0), }
    },
    console.log("constructor : ");
    console.log({...this.state.app});
  };

  leOnKeyPress(e) {
    console.log('il appuie sur des touches et il est content....');
    if (e.key === 'Enter') {
      console.log('putain c\'était pas compliqué bordel !');
    }
  }

  onButtonSelected(button) {
    console.log('Ah t\'as trouvé le bouton enfin.... : ');
    console.log(button);
    if (button === 'remove') {
      const newapp = ({ this.state.app.lists[1].tasks.task[1] = '30' })
      this.setState({ app: newapp });
      console.log("on selected : ");
 	  console.log({...this.state.app});
    }
    if (button === 'addtasklist') {
    	console.log('las');
    }
  }

  render() {
    return (
      <div className='datApp'>
        <CustomButton message='Ajouter une liste' name='addlist' onButtonSelected={this.onButtonSelected} />
        <Title title='App' />
        <TaskLists {...this.state.app} onButtonSelected={this.onButtonSelected} />
      </div>
    );
  }
}

export default App
