import chai from 'chai';
import { todosReducer } from '../../reducers';
import { ADD_TODO, DELETE_TODO, ADD_TASK, DELETE_TASK } from '../../actions';

const { describe, it } = global;
const { expect } = chai;

// console.log('todos:   ', todos);

describe('[UT] todo reducers', () => {
  it('should handle a ADD_TODO', () => {
    expect(
      todosReducer({}, {
        type: ADD_TODO,
        todo2add: {
          id: 1,
          name: 'first_todo',
          tasks: {
            1: {
              checked: false,
              id: 1,
              name: 'task.1.1',
            },
          },
        },
      }),
    ).to.deep.equal({
      todos: {
        1: {
          id: 1,
          name: 'first_todo',
          tasks: {
            1: {
              id: 1,
              name: 'task.1.1',
              checked: false,
            },
          },
        },
      },
    });
  });
  it('should handle a DELETE_TODO', () => {
    expect(
      todosReducer({
        todos: {
          1: {
            id: 1,
            name: 'first_todo',
            tasks: {
              1: {
                id: 1,
                name: 'task.1.1',
                checked: false,
              },
            },
          },
        },
      }, {
        type: DELETE_TODO,
        id: 1,
      }),
    ).to.deep.equal({ todos: {} });
  });
  it('should handle a ADD_TASK', () => {
    expect(
       todosReducer({
         todos: {
           1: {
             id: 1,
             name: 'first_todo',
             tasks: {
               1: {
                 id: 1,
                 name: 'task.1.1',
                 checked: false,
               },
             },
           },
         },
       }, {
         type: ADD_TASK,
         id: 1,
         task: {
           id: 2,
           name: 'task.1.2',
           checked: false,
         },
       }),
    ).to.deep.equal({
      todos: {
        1: {
          id: 1,
          name: 'first_todo',
          tasks: {
            1: {
              id: 1,
              name: 'task.1.1',
              checked: false,
            },
            2: {
              id: 2,
              name: 'task.1.2',
              checked: false,
            },
          },
        },
      },
    });
  });
  it('should handle a DELETE_TASK', () => {
    expect(
      todosReducer({
        todos: {
          2: {
            id: 2,
            name: 'second_todo',
            tasks: {
              2: {
                id: 2,
                name: 'task.2.1',
                checked: false,
              },
              3: {
                id: 3,
                name: 'task_2',
                checked: true,
              },
              4: {
                id: 4,
                name: 'task_3',
                checked: false,
              },
            },
          },
        },
      }, {
        type: DELETE_TASK,
        idTodo: 2,
        idTask: 3,
      }),
    ).to.deep.equal({
      todos: {
        2: {
          id: 2,
          name: 'second_todo',
          tasks: {
            2: {
              id: 2,
              name: 'task.2.1',
              checked: false,
            },
            4: {
              id: 4,
              name: 'task_3',
              checked: false,
            },
          },
        },
      },
    });
  });
});
