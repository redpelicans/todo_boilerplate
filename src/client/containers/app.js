/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import NewList from '../components/newlist'
import Todo from '../components/todo'

import { addList, pushList, delList, deleteList, listInput, getLists, gotLists } from '../actions/lists'
import { addTask, pushTask, delTask, deleteTask, taskInput, getTasks, gotTasks } from '../actions/tasks'

const App = ({ input, lists, tasks, dispatch }) => {
  const listChange = value => {
    dispatch(listInput(value));
  };
  const onNewList = (title) => {
    dispatch(pushList(title, r => dispatch(addList(r))))
  }
  const onDelList = e => {
    dispatch(deleteList(e.target.id, r => dispatch(delList(r.id))))
  }
  const taskChange = (value, id) => {
    dispatch(taskInput(value, id));
  }
  const onNewTask = (description, listId) => {
    dispatch(pushTask({ listId, description }, r => dispatch(addTask(r))))
  }
  const onDelTask = e => {
    dispatch(deleteTask(e.target.id, r => dispatch(delTask(r.id))))
  }
  const fetchLists = () => {
    dispatch(getLists(/*lists => dispatch(gotLists(lists))*/))
  }
  const fetchTasks = () => {
    dispatch(getTasks(tasks => dispatch(gotTasks(tasks))))
  }
  return (
    <div className='app-wrapper'>
      <h1>A fantastic Todo is on its way !</h1>
      <NewList
        fetchLists={ fetchLists }
        fetchTasks={ fetchTasks }
        handleChange={ listChange }
        inputVal={ input.lists }
        onNewList={ onNewList } />
      <Todo
        listChange={listChange}
        lists={lists}
        onDelList={onDelList}
        onDelTask={onDelTask}
        onNewList={onNewList}
        onNewTask={onNewTask}
        taskChange={taskChange}
        tasks={tasks} />
    </div>
  )
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  input: React.PropTypes.object.isRequired,
  lists: React.PropTypes.array.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default connect(state => ({ input: state.input, lists: state.lists, tasks: state.tasks }))(App);
