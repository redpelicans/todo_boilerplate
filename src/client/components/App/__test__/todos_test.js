import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTodo, { Wrapper } from '../../add_todo';
import Todo, { Area, TitleTodo } from '../../todo';
import TaskList from '../../task_list';
import AddTask from '../../add_task';
import actions, { addTodo } from '../../../actions';
import store from '../../../store';
import state from '../../../mystate';

const { dispatch } = store;
const { describe, it } = global;
const { expect } = chai;

describe('[UT] <AddTodo />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<AddTodo onAddTodo={addTodo} dispatch={dispatch} />)
      .find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(<AddTodo onAddTodo={addTodo} dispatch={dispatch} />)
      .find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<AddTodo onAddTodo={addTodo} dispatch={dispatch} />)
      .find(Button)).to.have.length(1);
  });
});

describe('[UT] <Todo />', () => {
  it('should render a  <Area />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={state.todos[1]} key={1} />)
      .find(Area)).to.have.length(1);
  });
  it('should render a   <TitleTodo />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={state.todos[1]} key={1} />)
      .find(TitleTodo)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={state.todos[1]} key={1} />)
      .find(Button)).to.have.length(1);
  });
  it('should render a   <AddTask />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={state.todos[1]} key={1} />)
      .find(AddTask)).to.have.length(1);
  });
  it('should render a   <TaskList />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={state.todos[1]} key={1} />)
      .find(TaskList)).to.have.length(1);
  });
});

// describe('[UT] <TodoList />', () => {
//   it('should render a  <TodoContainer />', () => {
//     expect(shallow(<TodoList store={store} actions={actions} />)
//       .find(TodoContainer)).to.equal.length(1);
//   });
//   it('should render a   <Todo />', () => {
//     expect(shallow(<TodoList store={store} actions={actions} />)
//       .find(Todo)).to.have.length(1);
//   });
// });
