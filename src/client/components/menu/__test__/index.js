import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Switch from 'antd/lib/switch';
import { createStore } from '../../../store';
import initialState from '../../../mockup';
import actions from '../../../actions';
import Menu, { Section, Filters } from '..';
import AddTodo from '../add_todo';
import FilterTodos from '../filter_todos';
import SortTodos from '../sort_todos';

const FormItem = Form.Item;
const { describe, it } = global;
const { expect } = chai;
const store = createStore(initialState);
const { dispatch, state: { mode } } = store;

describe('[UT] <Menu />', () => {
  it('should render a <Section />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      Section)).to.have.length(1);
  });

  it('should render a <Filters />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      Filters)).to.have.length(1);
  });

  it('should render a <AddTodo />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      AddTodo)).to.have.length(1);
  });

  it('should render a <SortTodos />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      SortTodos)).to.have.length(1);
  });

  it('should render a <FilterTodos />', () => {
    expect(shallow(<Menu dispatch={dispatch} actions={actions} mode={mode} />).find(
      FilterTodos)).to.have.length(1);
  });
});

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

describe('[UT] <SortTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <SortTodos
        dispatch={dispatch}
        onSwitch={actions.sortByAsc}
        sortByAsc={mode.sortByAsc}
      />).find(Switch)).to.have.length(1);
  });
});

describe('[UT] <FilterTodos />', () => {
  it('should render a <Switch />', () => {
    expect(shallow(
      <FilterTodos
        dispatch={dispatch}
        onSwitch={actions.showCompleted}
        sortByAsc={mode.showCompletedTodos}
      />).find(Switch)).to.have.length(1);
  });
});
