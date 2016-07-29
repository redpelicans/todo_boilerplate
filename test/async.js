import { configureStore } from './helpers';
import _ from 'lodash';
import chai from "chai";
import reducer from '../src/client/reducers';
import { createList, fetchList, removeList } from '../src/client/actions/lists';
import { createTask, removeTask } from '../src/client/actions/tasks';
import {
  LIST_CREATED,
  RECEIVED_LIST,
  LIST_REMOVED,
} from '../src/client/actions/lists';
import {
  RECEIVED_TASK,
  TASK_CREATED,
  TASK_REMOVED,
} from '../src/client/actions/tasks';


chai.should()

describe('server/async_lists test', () => {
it('addlist test', done => {
  const store = configureStore(reducer, undefined, {
  LIST_CREATED: ({ dispatch, getState }) => {
    done();
    },   
  });
  store.dispatch(createList('test new list'));     
});
it('removelist test', done => {
  const store = configureStore(reducer, undefined, {
  LIST_REMOVED: ({ dispatch, getState }) => {
    done();
    },
  });
  const { lists } = store.getState();
  const id = _.find(lists, { 'label': 'test new list' });
  store.dispatch(removeList(id));
});
it('fetchlist test', done => {
  const store = configureStore(reducer, undefined, {
    RECEIVED_LIST: ({ dispatch, getState }) => {
      done();
      },
    });
    store.dispatch(fetchList()); 
  });
it('fetchtask test', done => {
  const store = configureStore(reducer, undefined, {
    RECEIVED_TASK: ({ dispatch, getState }) => {
      done();
      },
    });
    store.dispatch(fetchList()); 
  });
it('addtask test', done => {
  const store = configureStore(reducer, undefined, {
    TASK_CREATED: ({ dispatch, getState }) => {
      done();
    },   
  });
  const { lists } = store.getState();
  const id = _.find(lists, { 'label': 'test new list' });
  store.dispatch(createTask('test new task', id));     
  });

it('removetask test', done => {
  const store = configureStore(reducer, undefined, {
  TASK_REMOVED: ({ dispatch, getState }) => {
    done();
    },
  });
  const { tasks } = store.getState();
  const id = _.find(tasks, { 'description': 'test new task' });
  store.dispatch(removeTask(id));
  }); 
});


 
 

  
