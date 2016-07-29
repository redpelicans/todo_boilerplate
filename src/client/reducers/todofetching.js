import { IS_FETCHING, FINISHED_FETCHING } from '../actions/fetching';

const todoFetching = (state = 0, action) => {
  switch (action.type) {
  case IS_FETCHING:
    return (state + 1);
  case FINISHED_FETCHING:
    return (state - 1);
  default:
    return state;
  }
};

export default todoFetching;
