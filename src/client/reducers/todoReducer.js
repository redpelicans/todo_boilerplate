/**
 * Created by Antoine on 20/07/2016.
 */
import combineReducers from 'redux'

import lists from './listReducer'
import tasks from './taskReducer'

// const todoReducer = combineReducers({
//   lists, tasks
// });

const todoReducer = (state = [], action) => (state);

export default todoReducer
