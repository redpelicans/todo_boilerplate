import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTodo, { Wrapper } from '../../add_todo';
import Todo, { Area, TitleTodo } from '../../todo';
import TaskList from '../../task_list';
import AddTask from '../../add_task';
// import TodoList, { TodoContainer } from '../../todo_list';
import actions from '../../../actions';
import store from '../../../mystore';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <AddTodo />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<AddTodo onAddTodo={actions.addTodo} dispatch={store.dispatch.bind(store)} />)
      .find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(<AddTodo onAddTodo={actions.addTodo} dispatch={store.dispatch.bind(store)} />)
      .find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<AddTodo onAddTodo={actions.addTodo} dispatch={store.dispatch.bind(store)} />)
      .find(Button)).to.have.length(1);
  });
});

describe('[UT] <Todo />', () => {
  it('should render a  <Area />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={store.state[1]} key={1} />)
      .find(Area)).to.have.length(1);
  });
  it('should render a   <TitleTodo />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={store.state[1]} key={1} />)
      .find(TitleTodo)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={store.state[1]} key={1} />)
      .find(Button)).to.have.length(1);
  });
  it('should render a   <AddTask />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={store.state[1]} key={1} />)
      .find(AddTask)).to.have.length(1);
  });
  it('should render a   <TaskList />', () => {
    expect(shallow(<Todo actions={actions} store={store} todo={store.state[1]} key={1} />)
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
