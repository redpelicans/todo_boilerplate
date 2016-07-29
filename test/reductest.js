import * as list from '../src/client/actions/list';
import * as task from '../src/client/actions/task';
import lists from '../src/client/reducers/lists';
import tasks from '../src/client/reducers/tasks';
import status from '../src/client/reducers/status';
import rootReducer from '../src/client/reducers';
import expect from 'expect';
var deepFreeze = require('deep-freeze-es6');

describe('deepFreeze', () => {
  it('should fail because of deepFreeze', () => {
      const listBefore = [];
      const listAfter = [0];

      deepFreeze(listBefore);
      
      expect(
        listBefore.push(0)
        ).toEqual(listAfter);
    });
});

describe('actions creators', () => {
  it('should create an action to add a list', () => {
    const id = 3;
    const expectedReturn = {
      type: list.ADD_LIST,
      id,
    };
    expect(list.listAdded(id)).toEqual(expectedReturn);
  });
  it('should create an action to remove a list', () => {
    const idList = 3;
    const expectedReturn = {
      type: list.REMOVE_LIST,
      idList,
    };
    expect(list.removeList(idList)).toEqual(expectedReturn);
  });
  it('should create an action to add a task', () => {
    const idList = 3;
    const idTask = 10;
    const expectedReturn = {
      type: task.ADD_TASK,
      idList,
      idTask,
    };
    expect(task.addTask(idList)).toEqual(expectedReturn);
  });
  it('should create an action to remove a task', () => {
    const idTask = 3;
    const expectedReturn = {
      type: task.REMOVE_TASK,
      idTask,
    };
    expect(task.removeTask(idTask)).toEqual(expectedReturn);
  });
});

describe('app rootReducer', () => {
/*  it('should return the initial state', () => {
    expect(
      rootReducer(undefined, {})
      ).toEqual({
      lists: {},
      status: {},
      tasks: {},
    });
      });
  it('should handle LIST_ADDED', () => {
    const test = { type: list.LIST_ADDED, list: { id: 1, label: 'test' } };
    const state = {};
    const result = {
      1: { id: 1, label: 'test' }
    };
    deepFreeze(state);
    expect(lists(state, test)).toEqual(result);
  });
  it('should handle REMOVED_TASK', () => {
    const test = { type: task.REMOVED_TASK, idTask: 1 };
    const state = {
      1: { id: 1, listId: 3, description: 'testtask1' },
      2: { id: 2, listId: 1, description: 'tasktest8' }
    };
    const result = {
      2: { id: 2, listId: 1, description: 'tasktest8' }
    };
    deepFreeze(state);
    expect(tasks(state, test)).toEqual(result);
  });
  it('should handle TASK_ADDED', () => {
    const test = { type: task.TASK_ADDED, task: { 1 : { id: 1, listId: 1, description: 'test' } } };
    const state = {};
    const result = {
      1: { id: 1, listId: 1, description: 'test' }
    };
    deepFreeze(state);
    expect(tasks(state, test)).toEqual(result);
  });*/
  it('should handle REMOVE_TASK', () => {
    expect(
      rootReducer(deepFreeze({ lists: { 0: { id: 0, label: 'list1' } }, status: {}, tasks: { 0: { id: 0, idList: 0, description: 'lala' } } }), {
        type: task.REMOVE_TASK,
        idTask: 0,
      })
      ).toEqual({
        lists: { 0: { id: 0, label: 'list1' } },
        tasks: {},
        status: {},
      });
  });
});
