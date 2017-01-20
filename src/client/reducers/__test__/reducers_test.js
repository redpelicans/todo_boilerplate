import chai from 'chai';
import todosReducer from '../todos';
import { todoAdded, todoDeleted } from '../../actions/todos';

const { describe, it } = global;
const { expect } = chai;

const initialState = [
  { id: 0, label: '1st todo' },
  { id: 1, label: '2nd todo' },
];

const stateAfterAdd = [
  { id: 0, label: '1st todo' },
  { id: 1, label: '2nd todo' },
  { id: 2, label: '3rd todo' },
];

const stateAfterDel = [
  { id: 0, label: '1st todo' },
];

describe.only('[UT] todo reducers', () => {
  it('should add a new todo', () => {
    expect(todosReducer(
      initialState, todoAdded({ id: 2, label: '3rd todo' })))
      .to.deep.equal(stateAfterAdd);
  });
  it('should delete a todo', () => {
    expect(todosReducer(
      initialState, todoDeleted({ id: 1 })))
      .to.deep.equal(stateAfterDel);
  });
});
