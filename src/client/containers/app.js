/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import NewList from '../components/newlist'
import Todo from '../components/todo'

import { addList, delList, listInput } from '../actions/lists'
import { addTask, delTask, taskInput } from '../actions/tasks'

const App = ({ input, lists, tasks, dispatch }) => {
  const listChange = value => {
    dispatch(listInput(value));
  };
  const onNewList = () => {
    dispatch(addList(input.lists));
  }
  const onDelList = e => {
    console.log(e);
    dispatch(delList(e.target.id));
  }
  const taskChange = (value, id) => {
    dispatch(taskInput(value, id));
  }
  const onNewTask = (description, listId) => {
    dispatch(addTask(description, listId));
  }
  const onDelTask = e => {
    dispatch(delTask(e.target.id));
  }
  return (
    <div className='app-wrapper'>
      <h1>A fantastic Todo is on its way !</h1>
      <NewList handleChange={ listChange }
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
