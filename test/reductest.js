import * as list from '../src/client/actions/list';
import * as task from '../src/client/actions/task';
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
    expect(list.addList(id)).toEqual(expectedReturn);
  });
  it('should create an action to change a list', () => {
    const inputlist = 'test';
    const expectedReturn = {
      type: list.CHANGE_LIST,
      inputlist,
    };
    expect(list.changeList(inputlist)).toEqual(expectedReturn);
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
  it('should create an action to change a task', () => {
    const idList = 3;
    const inputtask = 'test';
    const expectedReturn = {
      type: task.CHANGE_TASK,
      idList,
      inputtask,
    };
    expect(task.changeTask(idList, inputtask)).toEqual(expectedReturn);
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
  it('should return the initial state', () => {
    expect(
      rootReducer(undefined, {})
      ).toEqual({
      lists: {},
      inputlist: '',
      tasks: {},
    });
      });
  it('should handle ADD_LIST', () => {
    expect(
      rootReducer(deepFreeze({ lists: {}, inputlist: 'list1', tasks: {}}), {
        type: list.ADD_LIST,
        id: 2,
      })
      ).toEqual({
        lists: { 2: { id: 2, title: 'list1', inputtask: '' } },
        tasks: {},
        inputlist: '',
      });
  });
  it('should handle CHANGE_LIST', () => {
    expect(
      rootReducer(deepFreeze({ lists: {}, inputlist: 'list1', tasks: {}}), {
        type: list.CHANGE_LIST,
        inputlist: 'lalali',
      })
      ).toEqual({
        lists: {},
        tasks: {},
        inputlist: 'lalali',
      });
  });
  it('should handle REMOVE_LIST', () => {
    expect(
      rootReducer(deepFreeze({ lists: { 0: { id: 0, title: 'list1', inputtask: '', }}, inputlist: '', tasks: {} }), {
        type: list.REMOVE_LIST,
        idList: 0,
      })
      ).toEqual({
        lists: {},
        tasks: {},
        inputlist: '',
      });
  });
  it('should handle ADD_TASK', () => {
    expect(
      rootReducer(deepFreeze({ lists: { 0: { id: 0, title: 'list1', inputtask: 'lala', }}, inputlist: '', tasks: {}}), {
        type: task.ADD_TASK,
        idList: 0,
        idTask: 0,
      })
      ).toEqual({
        lists: { 0: { id: 0, title: 'list1', inputtask: '', } },
        tasks: { 0: { idList: 0, id: 0, task: 'lala'} },
        inputlist: '',
      });
  });
  it('should handle CHANGE_TASK', () => {
    expect(
      rootReducer(deepFreeze({ lists: { 0: { id: 0, title: 'list1', inputtask: 'lala', }}, inputlist: '', tasks: {}}), {
        type: task.CHANGE_TASK,
        idList: 0,
        inputtask: 'lali',
      })
      ).toEqual({
        lists: { 0: { id: 0, title: 'list1', inputtask: 'lali' } },
        tasks: {},
        inputlist: '',
      });
  });
  it('should handle REMOVE_TASK', () => {
    expect(
      rootReducer(deepFreeze({ lists: { 0: { id: 0, title: 'list1', inputtask: '', }}, inputlist: '', tasks: { 0: { id: 0, idList: 0, task: 'lala', } } }), {
        type: task.REMOVE_TASK,
        idTask: 0,
      })
      ).toEqual({
        lists: { 0: { id: 0, title: 'list1', inputtask: '' } },
        tasks: {},
        inputlist: '',
      });
  });
});
