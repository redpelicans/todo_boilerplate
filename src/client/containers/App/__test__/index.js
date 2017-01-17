import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';

import App from '..';
import Header from '../../Header';
import TodoContainer from '../../TodoContainer';
import actions from '../../../actions';

const state = [
  {
    title: 'my first todoList',
    id: 0,
    checked: true,
    tasks: [
      { title: 'my first task', checked: false, id: 0 },
      { title: 'my second task', checked: true, id: 1 },
      { title: 'my third task', checked: false, id: 2 },
      { title: 'my fourth task', checked: false, id: 3 },
      { title: 'my fifth task', checked: true, id: 4 },
      { title: 'my sixth task', checked: false, id: 5 },
    ],
  },
  {
    title: 'my second todoList',
    checked: false,
    id: 1,
    tasks: [
      { title: 'my first task', checked: false, id: 6 },
      { title: 'my second task', checked: false, id: 7 },
      { title: 'my third task', checked: true, id: 8 },
    ],
  },
];

const store = {
  state,
  listeners: [],
  listen(cb) { this.listeners.push(cb); },
  callListeners() { this.listeners.forEach(cb => cb()); },
  dispatch(action) {
    this.state = action(this.state);
    this.callListeners();
  },
};

const { describe, it } = global;
const { expect } = chai;

describe('<App />', () => {
  const app = shallow(<App store={store} actions={actions} />);
  it('should render a <Header />', () => {
    expect(app.find(Header)).to.have.length(1);
  });
  it('should render a <TodoContainer />', () => {
    expect(app.find(TodoContainer)).to.have.length(1);
  });
  it('should have store in props', () => {
    expect(app.props().store).to.equal(store);
  });
  it('should have actions in props', () => {
    expect(app.props().actions).to.equal(actions);
  });
});
