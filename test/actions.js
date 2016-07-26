import expect from 'expect';
import * as alist from '../src/client/actions/lists';
import * as atask from '../src/client/actions/tasks';

describe('Lists actions', () => {
  it('should create a ADDING_LIST action', () => {
    const expectedAction = {
      type: alist.ADDING_LIST,
    };
    expect(alist.addingList()).toEqual(expectedAction);
  });

  it('should create a LIST_ADDED action', () => {
    const list = { id: 0, label: 'yata' };
    const expectedAction = {
      type: alist.LIST_ADDED,
      list,
    };
    expect(alist.listAdded(list)).toEqual(expectedAction);
  });

  it('should create a REMOVING_LIST action', () => {
    const expectedAction = {
      type: alist.REMOVING_LIST,
    };
    expect(alist.removingList()).toEqual(expectedAction);
  });

  it('should create a LIST_REMOVED action', () => {
    const expectedAction = {
      type: alist.LIST_REMOVED,
      id: 1,
    };
    expect(alist.listRemoved(1)).toEqual(expectedAction);
  });

  it('should create a REQUEST_LISTS action', () => {
    const expectedAction = {
      type: alist.REQUEST_LISTS,
    };
    expect(alist.requestLists()).toEqual(expectedAction);
  });

  it('should create a RECEIVE_LISTS action', () => {
    const json = {
      0: { id: 1, label: 'yata' },
    };
    const expectedAction = {
      type: alist.RECEIVE_LISTS,
      lists: {
        1: { id: 1, label: 'yata' },
      },
    };
    expect(alist.receiveLists(json)).toEqual(expectedAction);
  });
});

describe('Tasks actions', () => {
  it('should create a ADDING_TASK action', () => {
    const expectedAction = {
      type: atask.ADDING_TASK,
    };
    expect(atask.addingTask()).toEqual(expectedAction);
  });

  it('should create a TASK_ADDED action', () => {
    const task = { id: 0, listId: 0, description: 'yata' };
    const expectedAction = {
      type: atask.TASK_ADDED,
      task,
    };
    expect(atask.taskAdded(task)).toEqual(expectedAction);
  });

  it('should create a REMOVING_TASK action', () => {
    const expectedAction = {
      type: atask.REMOVING_TASK,
    };
    expect(atask.removingTask()).toEqual(expectedAction);
  });

  it('should create a TASK_REMOVED action', () => {
    const expectedAction = {
      type: atask.TASK_REMOVED,
      id: 1,
    };
    expect(atask.taskRemoved(1)).toEqual(expectedAction);
  });

  it('should create a REQUEST_TASKS action', () => {
    const expectedAction = {
      type: atask.REQUEST_TASKS,
    };
    expect(atask.requestTasks()).toEqual(expectedAction);
  });

  it('should create a RECEIVE_TASKS action', () => {
    const json = {
      0: { id: 1, listId: 0, description: 'yata' },
    };
    const expectedAction = {
      type: atask.RECEIVE_TASKS,
      tasks: {
        1: { id: 1, listId: 0, description: 'yata' },
      },
    };
    expect(atask.receiveTasks(json)).toEqual(expectedAction);
  });
});
