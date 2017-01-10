import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import AddTodo from '../add_todo';

const FormItem = Form.Item;
const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch } = store;

describe('[UT] <AddTodo />', () => {
  it('should render a <Form />', () => {
    expect(shallow(<AddTodo dispatch={dispatch} onAdd={actions.addTodo} />).find(
      Form)).to.have.length(1);
  });

  it('should render two <FormItem />', () => {
    expect(shallow(<AddTodo dispatch={dispatch} onAdd={actions.addTodo} />).find(
      FormItem)).to.have.length(2);
  });

  it('should render a <Input />', () => {
    expect(shallow(<AddTodo dispatch={dispatch} onAdd={actions.addTodo} />).find(
      Input)).to.have.length(1);
  });

  it('should render a <Button />', () => {
    expect(shallow(<AddTodo dispatch={dispatch} onAdd={actions.addTodo} />).find(
      Button)).to.have.length(1);
  });
});
