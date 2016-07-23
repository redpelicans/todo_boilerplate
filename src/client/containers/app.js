/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import NewList from '../components/newlist'
import Todo from '../components/todo'

import { addList, delList } from '../actions/lists'
import { newInput } from '../actions/input'

const App = ({ input, lists, tasks, dispatch }) => {
  const handleChange = value => {
    dispatch(newInput(value));
  };
  const onNewList = () => {
    dispatch(addList(input.lists));
  }
  const onDelList = listId => {
    dispatch(delList(listId));
  }
  return (
    <div className='app-wrapper'>
      <h1>A fantastic Todo is on its way !</h1>
      <NewList handleChange={ handleChange }
        inputVal={ input.lists }
        onDelList= { onDelList }
        onNewList={ onNewList } />
      <Todo lists={lists} tasks={tasks} />
    </div>
  );
};

App.propTypes = {
  dispatch: React.PropTypes.func,
  input: React.PropTypes.object.isRequired,
  lists: React.PropTypes.array.isRequired,
  tasks: React.PropTypes.array.isRequired,
}

export default connect(state => ({ input: state.input, lists: state.lists, tasks: state.tasks }))(App);
