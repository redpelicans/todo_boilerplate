/**
 * Created by Antoine on 19/07/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import NewList from '../components/newlist'
import Todo from '../components/todo'
import todoReducer from '../reducers/todoReducer'

const App = ({ lists, tasks }) => (
  <div className="app-wrapper">
    <h1>A fantastic Todo is on its way !</h1>
    <NewList />
    <Todo lists={lists} tasks={tasks} />
  </div>
);

export default connect(state => ({ lists: state.lists, tasks: state.tasks }))(App);
