import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App, { Wrapper } from '../app';
import Header from '../../header';
import AddTodo from '../../add_todo';
import TodoList from '../../todo_list';
import actions from '../../../actions';
import store from '../../../mystore';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <App />', () => {
  it('should render a  <Wrapper />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(Wrapper)).to.have.length(1);
  });
  it('should render a   <Header />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(Header)).to.have.length(1);
  });
  it('should render a   <AddTodo />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(AddTodo)).to.have.length(1);
  });
  it('should render a   <TodoList />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(TodoList)).to.have.length(1);
  });
});
