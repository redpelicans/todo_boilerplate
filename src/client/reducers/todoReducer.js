import combineReducers from 'redux'

import input from './inputReducer'
import lists from './listReducer'
import tasks from './taskReducer'

// export default combineReducers({
//   lists,
//   tasks
// })


const initialState = {
	input: {
		lists: '',
		tasks: [],
	},
	lists: [
	],
	tasks: [
	]
};

export default function rootReducer(state = [], action) {
	return {
		input: input(state.input, action),
		lists: lists(state.lists, action),
		tasks: tasks(state.tasks, action),
	};
}