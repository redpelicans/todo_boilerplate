/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import NewList from '../components/newlist'
import Todo from '../components/todo'
import mapStateToProps from '../selectors/storeSelector'

import { pushList, deleteList, getLists } from '../actions/lists'
import { pushTask, deleteTask, getTasks } from '../actions/tasks'

const App = ({ api, lists, tasks, ...handlers }) => (
  <div className='app-wrapper'>
    <span><h1>A fantastic Todo is on its way !</h1></span>
    <NewList
      handlers={ handlers }
      status={ api } />
    <Todo
      handlers={handlers}
      lists={lists}
      tasks={tasks} />
  </div>
)

App.propTypes = {
  api: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func,
  lists: React.PropTypes.array.isRequired,
  tasks: React.PropTypes.array.isRequired,
}
console.log(mapStateToProps({ api: {}, lists: [], tasks: []}))
export default connect(
  // state => (
  // {
  //   api: state.api,
  //   lists: state.lists,
  //   tasks: state.tasks,
  // }),
  state => mapStateToProps(state),
  {
    fetchTasks: getTasks,
    fetchLists: getLists,
    onNewList: pushList,
    onNewTask: pushTask,
    onDelTask: deleteTask,
    onDelList: deleteList,
  })(App);
