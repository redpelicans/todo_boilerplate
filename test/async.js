import expect from 'expect';
import { configureStore } from './helpers/store';
import rootReducer from '../src/client/reducers';
import {
  LIST_ADDED,
  addList,
  LIST_REMOVED,
  removeList,
  RECEIVE_LISTS,
  fetchLists,
} from '../src/client/actions/lists';
import {
  TASK_ADDED,
  addTask,
  TASK_REMOVED,
  removeTask,
  RECEIVE_TASKS,
  fetchTasks,
} from '../src/client/actions/tasks';

describe('Async lists actions', function() {
  it('should add a list', done => {
    const initialState = undefined;
    const store = configureStore(rootReducer, initialState, {
      LIST_ADDED: ({ dispatch, getState }) =>  {
        done();
      },
    });
    store.dispatch(addList('yata async test'));
  });

  it('should fetch all lists', done => {
    const initialState = undefined;
    const store = configureStore(rootReducer, initialState, {
      RECEIVE_LISTS: ({ dispatch, getState }) =>  {
        done();
      },
    });
    store.dispatch(fetchLists());
  });
});

describe('Async tasks actions', function() {
  it('should fetch all tasks', done => {
    const initialState = undefined;
    const store = configureStore(rootReducer, initialState, {
      RECEIVE_TASKS: ({ dispatch, getState }) =>  {
        done();
      },
    });
    store.dispatch(fetchTasks());
  });
});
