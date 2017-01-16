const initialState = {
  todos: {
    1: {
      id: 1,
      order: 1,
      name: 'first_todo',
      tasks: {
        1: {
          id: 1,
          name: 'task.1.1',
          checked: false,
        },
      },
    },
    2: {
      id: 2,
      order: 2,
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
};

export default initialState;
