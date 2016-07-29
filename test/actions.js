import expect from 'expect';
import { addedTask, deletedTask, fetchedTasks, renamedTask } from '../src/client/actions/tasks';
import { ADDED_TASK, DELETED_TASK, FETCHED_TASKS, RENAMED_TASK } from '../src/client/actions/tasks';
import { addedList, deletedList, fetchedLists, renamedList } from '../src/client/actions/lists';
import { ADDED_LIST, DELETED_LIST, FETCHED_LISTS, RENAMED_LIST } from '../src/client/actions/lists';
import { isFetching, finishedFetching } from '../src/client/actions/fetching';
import { IS_FETCHING, FINISHED_FETCHING } from '../src/client/actions/fetching';
import { addList, deleteList, fetchLists, renameList } from '../src/client/actions/lists';
import { addTask, deleteTask, fetchTasks, renameTask } from '../src/client/actions/tasks';
import { createStore, applyMiddleware } from 'redux';
import todo from '../src/client/reducers/';
import 'whatwg-fetch';
import thunkMiddleware from 'redux-thunk';
import _ from 'lodash';

const configureStore = (reducer, initialState, types) => createStore( 
  reducer, 
  initialState, 
  applyMiddleware(
    myMiddleware(types), 
    thunkMiddleware
  )
)

const isFunction = arg => { return typeof arg === 'function' }

const myMiddleware = (types={}) => {
  const fired = {}
  return store => next => action => {
    const result = next(action)
    const cb = types[action.type]
    if(cb && !fired[action.type]){
      if(!isFunction(cb)) throw new Error("action's type value must be a function")
      fired[action.type] = true
      cb({getState: store.getState, dispatch: store.dispatch, action})
    }
    return result
  }
}

describe('sync Actions Tasks tests', function(){
  it('addedTask test', function(){
    const id = 1;
    const idlist = 1;
    const name = 'test';
    const expectedaction = {
      type: ADDED_TASK,
      id,
      idlist,
      name };
    expect(addedTask(id, idlist, name)).toEqual(expectedaction);
  });
  it('deletedTask test', function(){
    const id = 1;
    const expectedaction = {
      type: DELETED_TASK,
      id };
    expect(deletedTask(id)).toEqual(expectedaction);
  });
  it('fetchedTasks test', function(){
    const expectedaction = {
      type: FETCHED_TASKS,
      tasks: {} };
    expect(fetchedTasks([])).toEqual(expectedaction);
  });
  it('renamedTask test', function(){
    const id = 1;
    const newname = 'test';
    const expectedaction = {
      type: RENAMED_TASK,
      id,
      newname };
    expect(renamedTask(id, newname)).toEqual(expectedaction);
  });
});

describe('async Actions Tasks tests', function(){
  it('addTask test', done => {
    const store = configureStore(todo, undefined, {
      ADDED_TASK : ({ dispatch, getState }) => {
        done();
      } });
    store.dispatch(addTask('async test droncoli'));
  });
  it('renameTask test', done => {
    const store = configureStore(todo, undefined, {
      RENAMED_TASK : ({ dispatch, getState }) => {
        done();
      } });
    const { tasks } = store.getState();
    const id = _.find(tasks, { 'description': 'async test droncoli' });
    store.dispatch(renameTask(id, 'newname'));
  });
  it('deleteTask test', done => {
    const store = configureStore(todo, undefined, {
      DELETED_TASK : ({ dispatch, getState }) => {
        done();
      } });
    const { tasks } = store.getState();
    const id = _.find(tasks, { 'description': 'newname' });
    store.dispatch(deleteTask(id));
  });
  it('fetchTasks test', done => {
    const store = configureStore(todo, undefined, {
      FETCHED_TASKS : ({ dispatch, getState }) => {
        done();
      } });
    store.dispatch(fetchTasks());
  });
});

describe('sync Actions Lists tests', function(){
  it('addedList test', function(){
    const id = 1;
    const name = 'test';
    const expectedaction = {
      type: ADDED_LIST,
      id,
      name };
    expect(addedList(id, name)).toEqual(expectedaction);
  });
  it('deletedList test', function(){
    const id = 1;
    const expectedaction = {
      type: DELETED_LIST,
      id };
    expect(deletedList(id)).toEqual(expectedaction);
  });
  it('fetchedLists test', function(){
    const expectedaction = {
      type: FETCHED_LISTS,
      lists: {} };
    expect(fetchedLists([])).toEqual(expectedaction);
  });
  it('renamedList test', function(){
    const id = 1;
    const newname = 'test';
    const expectedaction = {
      type: RENAMED_LIST,
      id,
      newname };
    expect(renamedList(id, newname)).toEqual(expectedaction);
  });
});

describe('async Actions Lists tests', function(){
  it('addList test', done => {
    const store = configureStore(todo, undefined, {
      ADDED_LIST : ({ dispatch, getState }) => {
        done();
      } });
    store.dispatch(addList('async test droncoli'));
  });
  it('renameList test', done => {
    const store = configureStore(todo, undefined, {
      RENAMED_LIST : ({ dispatch, getState }) => {
        done();
      } });
    const { lists } = store.getState();
    const id = _.find(lists, { 'label': 'async test droncoli' });
    store.dispatch(renameList(id, 'newname'));
  });
  it('deleteList test', done => {
    const store = configureStore(todo, undefined, {
      DELETED_LIST : ({ dispatch, getState }) => {
        done();
      } });
    const { lists } = store.getState();
    const id = _.find(lists, { 'label': 'newname' });
    store.dispatch(deleteList(id));
  });
  it('fetchTasks test', done => {
    const store = configureStore(todo, undefined, {
      FETCHED_LISTS : ({ dispatch, getState }) => {
        done();
      } });
    store.dispatch(fetchLists());
  });
});

describe('sync Actions Fetch tests', function(){
  it('isFetching test', function(){
    const expectedaction = { type: IS_FETCHING };
    expect(isFetching()).toEqual(expectedaction);
  });
  it('finishedFetching test', function(){
    const expectedaction = {
      type: FINISHED_FETCHING };
    expect(finishedFetching()).toEqual(expectedaction);
  });
});
