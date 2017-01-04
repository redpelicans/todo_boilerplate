import React from 'react';
import HeaderTodo from './Header/header';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './Todo/TodoComp';

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
	render (){
		const { actions, store } = this.props;
		return (
			<div>
			  <HeaderTodo />
			  <AddTodo onAdd={this.onAdd}/>
			  <TodoList store={store} onDel={this.onDel} addTask={this.taskAdd} delTask={this.taskDelete} />
			</div>
		)
	}
}

export default App;

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};
