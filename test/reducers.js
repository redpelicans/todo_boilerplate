import expect from 'expect';
import deepFreeze from 'deep-freeze';
import rootReducer from '../src/client/reducers';
import * as alist from '../src/client/actions/lists';
import * as atask from '../src/client/actions/tasks';

describe('Reducers', () => {

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });
});

describe('List reducer', () => {

  it('should handle ADDING_LIST', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.ADDING_LIST,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle LIST_ADDED', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.LIST_ADDED,
        list: {
          id: 0,
          label: 'yata',
        },
      })
    ).toEqual({
      lists: {
        data: {
          0: { id: 0, label: 'yata' },
        },
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle REMOVING_LIST', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.REMOVING_LIST,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle LIST_REMOVED', () => {
    const state = {
      lists: {
        data: {
          0: { id: 0, label: 'yata' },
        },
        isFetching: false,
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.LIST_REMOVED,
        id: 0,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle REQUEST_LISTS', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.REQUEST_LISTS,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: true,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle RECEIVE_LISTS', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: alist.RECEIVE_LISTS,
        lists: {
          0: { id: 0, label: 'a' },
          12: { id: 12, label: 'b' },
        }
      })
    ).toEqual({
      lists: {
        data: {
          0: { id: 0, label: 'a' },
          12: { id: 12, label: 'b' },
        },
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });
});

describe('Task reducer', () => {

  it('should handle ADDING_TASK', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.ADDING_TASk,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle TASK_ADDED', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.TASK_ADDED,
        task: {
          id: 0,
          listId: 0,
          description: 'yata',
        },
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {
          0: { id: 0, listId: 0, description: 'yata' },
        },
        isFetching: false,
      },
    });
  });

  it('should handle REMOVING_TASK', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.REMOVING_TASK,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle TASK_REMOVED', () => {
    const state = {
      tasks: {
        data: {
          0: { id: 0, listId: 0, description: 'yata' },
        },
        isFetching: false,
      },
    };
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.TASK_REMOVED,
        id: 0,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: false,
      },
    });
  });

  it('should handle REQUEST_TASKS', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.REQUEST_TASKS,
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {},
        isFetching: true,
      },
    });
  });

  it('should handle RECEIVE_TASKS', () => {
    const state = {};
    deepFreeze(state);
    expect(
      rootReducer(state, {
        type: atask.RECEIVE_TASKS,
        tasks: {
          0: { id: 0, listId: 0, description: 'a' },
          12: { id: 12, listId: 2, description: 'b' },
        }
      })
    ).toEqual({
      lists: {
        data: {},
        isFetching: false,
      },
      tasks: {
        data: {
          0: { id: 0, listId: 0, description: 'a' },
          12: { id: 12, listId: 2, description: 'b' },
        },
        isFetching: false,
      },
    });
  });
});
