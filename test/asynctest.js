import configureStore from './helpers/store';
import rootReducer from '../src/client/reducers';
import { addList, LIST_ADDED, removeList, REMOVED_LIST } from '../src/client/actions/list';
import { addTask, TASK_ADDED, removeTask, REMOVED_TASK } from '../src/client/actions/task';
import { MADE_LIST, MADE_TASK, fetchLists } from '../src/client/actions/fetch';

describe('async actions test', function() {
/*  it('should addList', done => {
    const store = configureStore(rootReducer, undefined, {
      LIST_ADDED : ({ dispatch, getState }) => {
        done();
      },
    });
    store.dispatch(addList('je suis une liste de test de elacombe'));
  });

  it('should make lists & tasks from server', done => {
    const store = configureStore(rootReducer, undefined, {
      MADE_LISTS : ({ dispatch, getState }) => {
        done();
      },
    });
    store.dispatch(fetchLists());
  });
  it('should addTask', done => {
    const store = configureStore(rootReducer, undefined, {
      TASK_ADDED : ({ dispatch, getState }) => {
        done();
      },
    });
    store.dispatch(addTask(1, 'task de test'));
  });*/
  it('should removeTask', done => {
    const store = configureStore(rootReducer, undefined, {
      REMOVED_TASK : ({ dispatch, getState }) => {
        done();
      },
    });
    store.dispatch(removeTask(1));
  });
  /*it('should removeList', done => {
    const store = configureStore(rootReducer, undefined, {
      REMOVED_LIST : ({ dispatch, getState }) => {
        done();
      },
    });
    store.dispatch(removeList(1));
  });*/
});