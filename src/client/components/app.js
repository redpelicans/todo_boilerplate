import React from 'react';
import HeaderTodo from './Header/header';
import AddTask from './AddTask/AddTask';
import TodoTask from './Todo/TodoComp';

// const App = ({ store }) => (
//   <div>
//     <HeaderTodo />
//     <AddTask />
//     <TodoTask store={store} />
//   </div>
// );

class App extends React.Component {
	onAdd = () => {
		const { store, actions } = this.props;
		console.log('tt chakal')
		store.dispatch(actions.addTodo('tt'))
	}
	render (){
		const { store, actions } = this.props;
		return (
			<div>
			  <HeaderTodo />
			  <AddTask onAdd={this.onAdd}/>
			  <TodoTask todos={store.state.todos} dispatch={store.dispatch.bind(store)} onDelete={ () => {}} />
			</div>
		)
	}
}

export default App;
