import chai from "chai"
import React from 'react'
import equalJSX from 'chai-equal-jsx'
import {createRenderer} from 'react-addons-test-utils'
import AddTask from '../src/client/components/AddTask'
import AddList from '../src/client/components/AddList'
import App from '../src/client/components/App'
import AppTitle from '../src/client/components/AppTitle'
import Task from '../src/client/components/Task'
import Tasks from '../src/client/components/Tasks'
import List from '../src/client/components/List'
import ListHeader from '../src/client/components/ListHeader'
import Lists from '../src/client/components/Lists'
import Todo from '../src/client/components/Todo'

chai.should()
chai.use(equalJSX)

const test1 = () => null;

const test2 = (var1) => null;

const test3 = (var1, var2) => null;

const eo = {};

const props1 = {
  lists: [],
  tasks: [],
  isFetching: 0,
  onAddTask: test3,
  onAddList: test2,
  onDeleteTask: test2,
  onDeleteList: test2,
  onFetchLists: test1,
  onFetchTasks: test1,
  onRenameTask: test3,
  onRenameList: test3 };

const props2 = {
  lists: [{id: 1, label: 'test'}],
  tasks: [],
  onAddTask: test3,
  onAddList: test2,
  onDeleteTask: test2,
  onDeleteList: test2,
  onRenameTask: test3,
  onRenameList: test3 };

const props3 = {
  idList: 0,
  tasks: {1: {id: 1, listId: 0, description: 'test'}},
  onAddTask: test3,
  onDeleteTask: test2,
  onRenameTask: test3 };

describe('Components tests', function(){
  it('AddList test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AddList, {onAddList: test1}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(
      <div className='List' onSubmit={test2}>
        <h2>New List :</h2>
        <form>
          <input onChange={test2} type='text' value=''></input>
        </form>
      </div>);
  });
  it('AddTask test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AddTask, {id:0, onAddTask: test1}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(
      <div onSubmit={test2}>
        <h3>New Task :</h3>
        <form>
          <input onChange={test2} type='text' value=''></input>
        </form>
      </div>);
  });
  it('AppTitle test 1', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AppTitle, {isFetching: 0}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='AppTitle'><h1>Todo List</h1></div>);
  });
  it('AppTitle test 2', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(AppTitle, {isFetching: 1}));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='AppTitle'><h1>Todo List</h1><div className='spinner'></div></div>);
  });
  it('Lists test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(Lists, props2));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(
      <div className='Lists'>
        <List
          id={Number('1')}
          key='1'
          name='test'
          onAddTask={props2.onAddTask}
          onDeleteList={props2.onDeleteList}
          onDeleteTask={props2.onDeleteTask}
          onRenameList={props2.onRenameList}
          onRenameTask={props2.onRenameTask}
          tasks={eo} />
        <AddList onAddList={props2.onAddList} />
      </div>);
  });
  it('Tasks test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(Tasks, props3));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(
      <div className='Elems'>
        <Task
          description='test'
          id={Number('1')}
          key='1'
          onDeleteTask={props3.onDeleteTask}
          onRenameTask={props3.onRenameTask} />
        <AddTask id={props3.idList} onAddTask={props3.onAddTask} />
      </div>);
  });
  it('Todo test', function(){
    const renderer = createRenderer();
    renderer.render(React.createElement(Todo, props1));
    const output = renderer.getRenderOutput();
    output.should.equalJSX(<div className='Todo'><AppTitle isFetching={props1.isFetching} /><Lists {...props1} /></div>);
  });
});
