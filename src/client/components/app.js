import React from 'react'
import TaskLists from './tasklists'
import Title from './title'
import CustomButton from './custombutton'
import Task from './task'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonSelected = this.onButtonSelected.bind(this);
    this.state = {
      onClick: false,
      onEnter: false,
      app: { lists: _.map(this.props, 'list')},
    };
  }

  leOnClick() {
    console.log('vas y click ! click j\'te dis !');
    this.setState({ onClick: true });
  }

  leOnKeyPress(e) {
    console.log('il appuie sur des touches et il est content....');
    if (e.key === 'Enter') {
      console.log('putain c\'était pas compliqué bordel !');
      this.setState({ onEnter: true });
    }
  }

  onButtonSelected(button) {
    console.log('Ah t\'as trouvé le bouton enfin.... : ');
    console.log(button);
    if (button === 'addtask') {
      console.log('lalalilali');
      //this.setState{app: }
    }
    if (button === 'addtasklist') {
    	console.log('las');
    }
  }

  render() {
    return (
      <div
        className='datApp'
        onClick={this.leOnClick.bind(this)}
        onKeyPress={this.leOnKeyPress.bind(this)}>
        <CustomButton message='Ajouter une liste' name='addlist' onButtonSelected={this.onButtonSelected} />
        <Title title='App' />
        <TaskLists {...this.state.app} onButtonSelected={this.onButtonSelected} />
      </div>
    );
  }
}

export default App
