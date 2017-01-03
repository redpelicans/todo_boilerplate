const store = {
  1: {
    order: 1,
    name: 'first_todo',
    tasks: {
      1: {
        name: 'task_1',
        checked: true,
      },
    },
  },
  2: {
    order: 2,
    name: 'second_todo',
    tasks: {
      1: {
        name: 'task_1',
        checked: false,
      },
      2: {
        name: 'task_2',
        checked: false,
      },
      3: {
        name: 'task_3',
        checked: true,
      },
    },
  },
};

export default store;
