import React from 'react';
import _ from 'lodash';
import Task from './Task';
import AddTask from './AddTask';
import TaskListTitle from './TaskListTitle';
import RemoveTaskList from './RemoveTaskList';

const TaskList = (props) => {

  const taskElems = _.map(props.tasks, task => (
      <Task task={task} {...props} key={task.id} />
  ));

  return (
    <div className='task-list'>
      <header>
        <TaskListTitle value={props.list.title} />
        <RemoveTaskList id={props.list.id} onRemove={props.onRemoveList} />
      </header>
      <div className='tasks'>
        {taskElems}
      </div>
      <AddTask
        {...props}
        listId={props.list.id}
        onAddTask={props.onAddTask}
        onChange={props.onTaskInput}
        value={props.list.newTaskText} />
    </div>
  );
};

TaskList.propTypes = {
  list: React.PropTypes.object.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
  onTaskInput: React.PropTypes.func.isRequired,
  onRemoveList: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired,
};

export default TaskList;
