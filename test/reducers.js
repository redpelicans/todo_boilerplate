import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { ADDED_TASK, DELETED_TASK, FETCHED_TASKS, RENAMED_TASK } from '../src/client/actions/tasks';
import { ADDED_LIST, DELETED_LIST, FETCHED_LISTS, RENAMED_LIST } from '../src/client/actions/lists';
import { IS_FETCHING, FINISHED_FETCHING } from '../src/client/actions/fetching';
import todoLists from '../src/client/reducers/todolists';
import todoTasks from '../src/client/reducers/todotasks';
import todoFetching from '../src/client/reducers/todofetching';

describe('reducer todoTasks tests', function(){
  it('initial state', function(){
    expect(todoTasks(undefined, {})).toEqual({});
  });
  it('handle addedTask', function(){
    const action = { type: ADDED_TASK, id: 1, idlist: 1, name: 'Task 1' };
    const state = {};
    const next = { 1: { id: 1, listId: 1, description: 'Task 1' } };
    deepFreeze(state);
    expect(todoTasks(state, action)).toEqual(next);
  });
  it('handle deletedTask', function(){
    const action = { type: DELETED_TASK, id: 1 };
    const state = {
      1: { id: 1, listId: 1, description: 'Task 1' },
      2: { id: 2, listId: 1, description: 'Task 2' } };
    const next ={ 2: { id: 2, listId: 1, description: 'Task 2' } };
    deepFreeze(state);
    expect(todoTasks(state, action)).toEqual(next);
  });
  it('handle fetchedTasks', function(){
    const tasks = {
      1: { id: 1, listId: 1, description: 'Task 1' },
      2: { id: 2, listId: 1, description: 'Task 2' } };
    const action = { type: FETCHED_TASKS, tasks };
    const state = {};
    deepFreeze(state);
    expect(todoTasks(state, action)).toEqual(tasks);
  });
  it('handle RenamedTasks', function(){
    const action = { type: RENAMED_TASK, id: 1, newname: 'Task A' };
    const state = {
      1: { id: 1, listId: 1, description: 'Task 1' },
      2: { id: 2, listId: 1, description: 'Task 2' } };
      const next = {
      1: { id: 1, listId: 1, description: 'Task A' },
      2: { id: 2, listId: 1, description: 'Task 2' } };
      deepFreeze(state);
      expect(todoTasks(state, action)).toEqual(next);
  });
});

describe('reducer todoLists tests', function(){
  it('initial state', function(){
    expect(todoLists(undefined, {})).toEqual({});
  });
  it('handle addedList', function(){
    const action = { type: ADDED_LIST, id: 1, name: 'List 1' };
    const state = {};
    const next = { 1: { id: 1, label: 'List 1' } };
    deepFreeze(state);
    expect(todoLists(state, action)).toEqual(next);
  });
  it('handle deletedList', function(){
    const action = { type: DELETED_LIST, id: 1 };
    const state = {
      1: { id: 1, label: 'List 1' },
      2: { id: 2, label: 'List 2' } };
    const next ={ 2: { id: 2, label: 'List 2' } };
    deepFreeze(state);
    expect(todoLists(state, action)).toEqual(next);
  });
  it('handle fetchedLists', function(){
    const lists = {
      1: { id: 1, label: 'List 1' },
      2: { id: 2, label: 'List 2' } };
    const action = { type: FETCHED_LISTS, lists };
    const state = {};
    deepFreeze(state);
    expect(todoLists(state, action)).toEqual(lists);
  });
  it('handle RenamedLists', function(){
    const action = { type: RENAMED_LIST, id: 1, newname: 'List A' };
    const state = {
      1: { id: 1, label: 'List 1' },
      2: { id: 2, label: 'List 2' } };
      const next = {
      1: { id: 1, label: 'List A' },
      2: { id: 2, label: 'List 2' } };
      deepFreeze(state);
      expect(todoLists(state, action)).toEqual(next);
  });
});

describe('reducer todoFetching tests', function(){
  it('initial state', function(){
    expect(todoFetching(undefined, {})).toEqual(0);
  });
  it('handle isFetching', function(){
    const state = 0;
    deepFreeze(state);
    expect(todoFetching(state, { type: IS_FETCHING })).toEqual(1);
  });
  it('handle finishedFetching', function(){
    const state = 1;
    deepFreeze(state);
    expect(todoFetching(state, { type: FINISHED_FETCHING })).toEqual(0);
  });
});
