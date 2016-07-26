export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const INPUT_TASK = 'INPUT_TASK';

let currID;

export const addTask = (task) => {
  currID = task.id >= currID ? task.id : currID;
  return ({
    type: ADD_TASK,
    task,
  })
}

export const delTask = (id) => ({
  type: DEL_TASK,
  id,
})

export const taskInput = (input, id) => ({
  type: INPUT_TASK,
  input,
  id,
})
