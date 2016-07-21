import combineReducers from 'redux'

import lists from './listReducer'
import tasks from './taskReducer'

// export default combineReducers({
//   lists,
//   tasks
// })

// export default function reducer(state = [lists, tasks], action) {
// 	return [
// 		lists(state.lists, action),
// 		tasks(state.tasks, action)
// 	]
// }

export default function reducer(state, action) {
	return state
}