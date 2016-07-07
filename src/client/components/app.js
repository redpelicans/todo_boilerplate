import React from 'react'
import TaskLists from './tasklists'
import Title from './title'
import CustomButton from './custombutton'

class App extends React.Component {
  constructor (props) {
  	super();
  	this.state = {
  		onClick: false,
  		onKeyPress: false
  	};

  }
  
  handleOnClick () {
  	console.log('vas y click ! click j\'te dis !');
 	this.setState({ onClick: true });
  }

  handleOnKeyPress (e) {
  	console.log('il appuie sur des touches et il est content....');
  	if (e.key === 'Enter') {
  		console.log('putain c\'était pas compliqué bordel !');
 		this.setState({ onKeyPress: true });
 	}
  }

  onButtonSelected = () => {
  	console.log('BOUTON ENCLUME');
  	this.setState({ onClick: false })
  }

  render () {
  	var classes = ([
  	  this.state.onClick && 'click',
  	  this.state.onEnter && 'enter'
  	]);

  	return (
    	<div
    	className={(classes)}
    	onClick={this.handleOnClick.bind(this)}
    	onKeyPress={this.handleOnKeyPress.bind(this)}>
    		<CustomButton message="Ajouter une liste" />
        	<Title title='App' />
        	<TaskLists {...this.props} onButtonSelected={this.onButtonSelected} />
    	</div>
  	);
  }
}

export default App
