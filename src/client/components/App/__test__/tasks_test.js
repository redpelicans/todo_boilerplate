import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTask, { Wrapper } from '../../add_task';
import Task, { SingleTask, TaskName } from '../../task';
import actions from '../../../actions';
import store from '../../../mystore';

const { describe, it } = global;
const { expect } = chai;
const dispatch = store.dispatch.bind(store);
const task = store.state[1].tasks[1];
const todo = store.state[1];

describe('[UT] <AddTask />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={actions.addTask} todoId={1} />)
      .find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={actions.addTask} todoId={1} />)
      .find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<AddTask dispatch={dispatch} onAddTask={actions.addTask} todoId={1} />)
      .find(Button)).to.have.length(1);
  });
});

describe('[UT] <Task />', () => {
  it('should render a  <SingleTask />', () => {
    expect(shallow(<Task actions={actions} dispatch={dispatch} key={1} task={task} todo={todo} />)
      .find(SingleTask)).to.have.length(1);
  });
  it('should render a   <TaskName />', () => {
    expect(shallow(<Task actions={actions} dispatch={dispatch} key={1} task={task} todo={todo} />)
      .find(TaskName)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Task actions={actions} dispatch={dispatch} key={1} task={task} todo={todo} />)
      .find(Button)).to.have.length.above(0);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<Task actions={actions} dispatch={dispatch} key={1} task={task} todo={todo} />)
      .find(Button)).to.have.length.above(0);
  });
});
