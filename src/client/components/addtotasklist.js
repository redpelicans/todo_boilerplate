import React from 'react'

const addToTaskList = _.map(props.tasks, (task, id) => {
    return (
      <Task
        key={id}
        listId={props.id}
        onRemoveTask={props.onRemoveTask}
        taskId={id}
        text={task.text} />
    );
  });

export default addToTaskList
