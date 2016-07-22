/**
 * Created by Antoine on 19/07/2016.
 */
import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'

import NewList from '../components/newlist'
import Todo from '../components/todo'

import { addList, delList } from '../actions/lists'
import { newInput } from '../actions/input'

const App = ({input, lists, tasks, dispatch }) => {
	const handleChange = value => {
		dispatch(newInput(value));
	};
	const onNewList = () => {
		dispatch(addList(input.lists));
	}
	return (
	  <div className="app-wrapper">
	    <h1>A fantastic Todo is on its way !</h1>
	    <NewList inputVal={ input.lists } handleChange={ handleChange } onNewList={ onNewList } />
	    <Todo lists={lists} tasks={tasks} />
	  </div>
	);
};

export default connect(state => ({ input: state.input, lists: state.lists, tasks: state.tasks }))(App);
