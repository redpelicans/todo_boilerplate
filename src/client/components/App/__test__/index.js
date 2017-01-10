import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App, { Wrapper, AddTodo } from '../app';
import store from '../../../index';
import actions from '../../../actions';
// import Header from '../../header';

const { describe, it } = global;
const { expect } = chai;

describe('[UT] <App />', () => {
  it('should render a <Wrapper />', () => {
    expect(shallow(<App store={store} actions={actions} />).find(Wrapper)).to.have.length(1);
    // expect(shallow(<App />).find(Header)).to.equal(true);
  });
  it('should render a <AddTodo />', () => {
    expect(shallow(<App />).find(AddTodo)).to.have.length(1);
    // expect(shallow(<App />).find(Header)).to.equal(true);
  });
  // it('should render a <Header />', () => {
  //   const Wrapper = shallow(<Header />);
  //   expect(Wrapper.length).to.equal(1);
  //   expect(Wrapper.contains(<Header />)).to.equal(true);
  //   // expect(shallow(<App />).find(Title)).to.have.length(1);
  // });
});

// const wrapper = shallow(<Foo />);
// expect(wrapper.find('.in-bar')).to.have.length(0);
// expect(wrapper.find(Bar)).to.have.length(1);
// expect(wrapper.find(Bar).shallow().find('.in-bar')).to.have.length(1);
