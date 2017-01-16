import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTask, { Wrapper } from '../../add_task';
import Task, { SingleTask, TaskName } from '../../task';
import actions, { addTask } from '../../../actions';
import store from '../../../store';
import state from '../../../mystate';

const { describe, it } = global;
const { expect } = chai;
const dispatch = store.dispatch;
const task = state.todos[1].tasks[1];
const todo = state.todos[1];

describe('[UT] <AddTask />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={addTask} todoId={1} />)
      .find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={addTask} todoId={1} />)
      .find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={addTask} todoId={1} />)
      .find(Button)).to.have.length(1);
  });
});

describe('[UT] <Task />', () => {
  it('should render a  <SingleTask />', () => {
    expect(shallow(<Task actions={actions} key={1} task={task} todo={todo} />)
      .find(SingleTask)).to.have.length(1);
  });
  // it('should render a   <Switch />', () => {
  //   expect(shallow(<Task actions={actions} key={1} task={task} todo={todo} />)
  //     .find(Switch)).to.have.length.above(0);
  // });
  it('should render a   <TaskName />', () => {
    expect(shallow(<Task actions={actions} key={1} task={task} todo={todo} />)
      .find(TaskName)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Task actions={actions} key={1} task={task} todo={todo} />)
      .find(Button)).to.have.length.above(0);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Task actions={actions} key={1} task={task} todo={todo} />)
      .find(Button)).to.have.length.above(0);
  });
});
