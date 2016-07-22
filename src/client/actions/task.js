export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';

let idTaskGlobal = 9;

export const addTask = (idList) => {
  idTaskGlobal = idTaskGlobal + 1;
  return {
    type: ADD_TASK,
    idList,
    idTask: idTaskGlobal,
  };
};

export const removeTask = (idTask) => ({ type: REMOVE_TASK, idTask });

export const changeTask = (idList, inputtask) => ({ type: CHANGE_TASK, idList, inputtask });
