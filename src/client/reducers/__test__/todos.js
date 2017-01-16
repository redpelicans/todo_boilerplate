import chai from 'chai';
import todosReducer from '../todos';
import { addTodo, delTodo } from '../../actions/todos';

const { describe, it } = global;
const { expect } = chai;

const addAction = addTodo('todo test 4');
const delAction = delTodo(1);

const initialState = [
  { id: 1, title: 'todo test 1' },
  { id: 2, title: 'todo test 2' },
  { id: 3, title: 'todo test 3' },
];

const stateAfterAdd = [
  ...initialState,
  { id: 4, title: 'todo test 4' },
];

const stateAfterDel = [
  { id: 2, title: 'todo test 2' },
  { id: 3, title: 'todo test 3' },
];

describe('[UT] [Reducer] todos', () => {
  it('should return the initial state when action is undefined', () => {
    expect(todosReducer(initialState, undefined)).to.deep.equal(initialState);
  });

  it('should return an empty state when state is undefined', () => {
    expect(todosReducer(undefined, undefined)).to.deep.equal([]);
  });

  it('should add a todo', () => {
    expect(todosReducer(initialState, addAction)).to.deep.equal(stateAfterAdd);
  });

  it('should delete a todo', () => {
    expect(todosReducer(initialState, delAction)).to.deep.equal(stateAfterDel);
  });
});
