import _ from 'lodash';

export const MAKE_LISTS = 'MAKE_LISTS';
export const MAKE_TASKS = 'MAKE_TASKS';

export const makeLists = (lists) => ({ type: MAKE_LISTS, lists: _.keyBy(lists, o => o.id) });

export const makeTasks = (tasks) => ({ type: MAKE_TASKS, tasks: _.keyBy(tasks, o => o.id) });

export const fetchLists = () => {
  return (dispatch) => {
    fetch('http://rp4.redpelicans.com:13004/api/todo/lists')
    .then(res => res.json())
    .then(lists => dispatch(makeLists(lists)));
    fetch('http://rp4.redpelicans.com:13004/api/todo/tasks')
    .then(res => res.json())
    .then(tasks => dispatch(makeTasks(tasks)));
  };
};
