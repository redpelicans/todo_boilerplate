import React from 'react';
import Title from './title'
import CreateList from './createlist'
import TodoList from './todolist'

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {add:false, 
					remove:false,
					list: ''};

		this.createListClick=this.createListClick.bind(this);
		this.removeItemClick=this.removeItemClick.bind(this);
		
		console.log("Creating TodoApp");
		console.log(this.state);
	};

	createListClick(lol) {
		this.setState({ click :true });
		console.log('createListClick');
	}

	removeItemClick(lol) {
		this.setState({ remove :true });
		console.log("removeItemClick");
	}

	handleTextChange(e) {	
    	this.setState({list: e.target.value});
  }

  	newList(e) {
    	e.preventDefault();
    	var text = this.state.list;
    	if (!list) {
      		return;
    	}
    	this.setState({text: ''});
	}

	render () {
		console.log("Rendering TodoApp");

		return ( 	
			<div className='todoapp'>
			<Title title='Marianne&#39;s todo list'/>
			<CreateList createListClick={this.createListClick} />
			<TodoList {...this.props} removeItemClick={this.removeItemClick} />
			</div>
		);
	};
};
