import React from 'react';
import HeaderTodo from './Header/header';
import AddTask from './AddTask/AddTask';
import TodoTask from './Todo/TodoComp'

const App = () => (
  <div>
    <HeaderTodo />
    <AddTask />
    <TodoTask name="todo1" />
    <TodoTask name="todo2" />
  </div>
);

export default App;
