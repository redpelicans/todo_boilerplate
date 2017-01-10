import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Button, Input } from 'antd';
import AddTask, { Wrapper } from '../../add_task';
import Todo from '../../todo';
import actions from '../../../actions';
import store from '../../../mystore';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <AddTask />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<AddTask dispatch={store.dispatch.bind(store)} onAddTask={actions.addTask} todoId={1} />)
      .find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Input />', () => {
    expect(shallow(<AddTask dispatch={store.dispatch.bind(store)} onAddTask={actions.addTask} todoId={1} />)
      .find(Input)).to.have.length(1);
  });
  it('should render a   <Button />', () => {
    expect(shallow(<AddTask dispatch={store.dispatch.bind(store)} onAddTask={actions.addTask} todoId={1} />)
      .find(Button)).to.have.length(1);
  });
});
