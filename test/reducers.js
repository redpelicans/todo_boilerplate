import expect from 'expect';
import rootReducer from '../src/client/reducers';
import * as actions from '../src/client/actions';

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      lists: {
        input: '',
        data: {},
      },
      tasks: {},
    });
  });

  it('should handle LIST_INPUT', () => {
    expect(
      rootReducer({}, {
        type: actions.LIST_INPUT,
        value: 'yata',
      })
    ).toEqual({
      lists: {
        input: 'yata',
        data: {},
      },
      tasks: {},
    });
  });

  it('should handle ADD_LIST', () => {
    expect(
      rootReducer({}, {
        type: actions.ADD_LIST,
        id: 0,
        title: 'yata',
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata', newTaskText: '' },
        },
      },
      tasks: {},
    });
  });

  it('should handle REMOVE_LIST', () => {
    expect(
      rootReducer({
        lists: {
          input: '',
          data: {
            0: { id: 0, title: 'yata' , newTaskText: '' },
          },
        },
      },
      {
        type: actions.REMOVE_LIST,
        id: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {},
      },
      tasks: {},
    });
  });

  it('should handle TASK_INPUT', () => {
    expect(
      rootReducer({
        lists: {
          input: '',
          data: {
            0: { id: 0, title: 'yata', newTaskText: '' },
          },
        },
      },
      {
        type: actions.TASK_INPUT,
        id: 0,
        value: 'yata',
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata', newTaskText: 'yata' },
        },
      },
      tasks: {},
    });
  });

  it('should handle ADD_TASK', () => {
    expect(
      rootReducer({
        lists: {
          input: '',
          data: {
            0: { id: 0, title: 'yata', newTaskText: '' },
          },
        },
        tasks: {},
      },
      {
        type: actions.ADD_TASK,
        id: 0,
        listId: 0,
        text: 'yata',
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata', newTaskText: '' },
        },
      },
      tasks: {
        0: { id: 0, listId: 0, text: 'yata' },
      },
    });
  });

  it('should handle REMOVE_TASK', () => {
    expect(
      rootReducer({
        lists: {
          input: '',
          data: {
            0: { id: 0, title: 'yata', newTaskText: '' },
          },
        },
        tasks: {
          0: { id: 0, listId: 0, text: 'yata' },
        },
      },
      {
        type: actions.REMOVE_TASK,
        id: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata', newTaskText: '' },
        },
      },
      tasks: {},
    });
  });
});
