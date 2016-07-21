import expect from 'expect';
import * as actions from '../src/client/actions';

describe('Actions', () => {
  it('should create an action for refreshing new list title', () => {
    const value = 'yata';
    const expectedAction = {
      type: actions.LIST_INPUT,
      value,
    };
    expect(actions.listInput(value)).toEqual(expectedAction);
  });

  it('should create an action to add a task list', () => {
    const id = 1;
    const title = 'yata';
    const expectedAction = {
      type: actions.ADD_LIST,
      id,
      title,
    };
    expect(actions.addList(title)).toEqual(expectedAction);
    expectedAction.id = 2;
    expect(actions.addList(title)).toEqual(expectedAction);
  });

  it('should create an action to remove a task list', () => {
    const id = 0;
    const expectedAction = {
      type: actions.REMOVE_LIST,
      id,
    };
    expect(actions.removeList(id)).toEqual(expectedAction);
  });

  it('should create an action for refreshing new task text', () => {
    const id = 0;
    const value = 'yata';
    const expectedAction = {
      type: actions.TASK_INPUT,
      id,
      value,
    };
    expect(actions.taskInput(id, value)).toEqual(expectedAction);
  });

  it('should create an action to add a task', () => {
    const id = 1;
    const listId = 0;
    const text = 'yata';
    const expectedAction = {
      type: actions.ADD_TASK,
      id,
      listId,
      text,
    };
    expect(actions.addTask(listId, text)).toEqual(expectedAction);
    expectedAction.id = 2;
    expect(actions.addTask(listId, text)).toEqual(expectedAction);
  });

  it('should create an action to remove a task', () => {
    const id = 0;
    const expectedAction = {
      type: actions.REMOVE_TASK,
      id,
    };
    expect(actions.removeTask(id)).toEqual(expectedAction);
  });
});
