import React from 'react';
import HeaderTodo from '../Header/header';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../Todo/TodoComp';
import 'antd/dist/antd.css';
import MyModal from '../AddTodo/modal';

class App extends React.Component {
	componentWillMount() {
		const { store } = this.props;
		store.listen(() => this.forceUpdate());
	}
	onAdd = (name) => {
		const { store, actions } = this.props;
		store.dispatch(actions.addTodo(name));
	}
	onDel = (id) => {
		const { store, actions } = this.props;
		store.dispatch(actions.deleteTodo(id));
	}
	taskAdd = (task, todoRef) => {
		const { store, actions } = this.props;
		store.dispatch(actions.addTask(task, todoRef));
	}
	taskDelete = (id) => {
		const { store, actions } = this.props;
		store.dispatch(actions.delTask(id));
	}
	manageTask = (id, checked) => {
		const { store, actions } = this.props;
		store.dispatch(actions.manageTask(id, checked));
	}
	updateTask = (id, newTitle) => {
		const {store, actions } = this.props;
		store.dispatch(actions.updateTask(id, newTitle));
	}
	setMode = (newMode, todoId) => {
		const {store, actions } = this.props;
		store.dispatch(actions.setMode(newMode, todoId));
	}
	render (){
		const { actions, store } = this.props;
		return (
			<div>
			  <HeaderTodo store={store} />
			  <AddTodo onAdd={this.onAdd}/>
			  <TodoList store={store}
			  			onDel={this.onDel}
			  			addTask={this.taskAdd}
			  			delTask={this.taskDelete}
			  			checkTask={this.checkTask}
			  			unCheckTask={this.unCheckTask}
			  			manageTask={this.manageTask}
			  			updateTask={this.updateTask} 
			  			setMode={this.setMode} />
			</div>
		)
	}
}

export default App;

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};
