export const ADD_TASK = 'ADD_TASK';
export const DEL_TASK = 'DEL_TASK';
export const INPUT_TASK = 'INPUT_TASK';

let currID = 3;

export const addTask = (description, listId) => {
  currID = currID + 1;
  return ({
    type: ADD_TASK,
    task: { id: currID, description, listId },
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
