import expect from 'expect';
import deepFreeze from 'deep-freeze';
import rootReducer from '../src/client/reducers';
import * as actions from '../src/client/actions';

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      lists: {
        input: '',
        data: {},
      },
      tasks: {
        input: {},
        data: {},
      },
    });
  });

  it('should handle LIST_INPUT', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.LIST_INPUT,
        value: 'yata',
      })
    ).toEqual({
      lists: {
        input: 'yata',
        data: {},
      },
      tasks: {
        input: {},
        data: {},
      },
    });
  });

  it('should handle ADD_LIST', () => {
    const state = {
      lists: {
        input: 'yata',
        data: {},
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.ADD_LIST,
        id: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: {
          0: '',
        },
        data: {},
      },
    });
  });

  it('should handle REMOVE_LIST', () => {
    const state = {
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.REMOVE_LIST,
        id: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {},
      },
      tasks: {
        input: {},
        data: {},
      },
    });
  });

  it('should handle TASK_INPUT', () => {
    const state = {
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.TASK_INPUT,
        id: 0,
        value: 'yata',
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: { 0: 'yata' },
        data: {},
      },
    });
  });

  it('should handle ADD_TASK', () => {
    const state = {
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: { 0: 'yata' },
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.ADD_TASK,
        id: 0,
        listId: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: { 0: '' },
        data: {
          0: { id: 0, listId: 0, text: 'yata' },
        },
      },
    });
  });

  it('should handle REMOVE_TASK', () => {
    const state = {
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: { 0: '' },
        data: {
          0: { id: 0, listId: 0, text: 'yata' },
        },
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: actions.REMOVE_TASK,
        id: 0,
      })
    ).toEqual({
      lists: {
        input: '',
        data: {
          0: { id: 0, title: 'yata' },
        },
      },
      tasks: {
        input: { 0: '' },
        data: {},
      },
    });
  });
});
