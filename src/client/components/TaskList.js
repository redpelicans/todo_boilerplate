import React from 'react';
import _ from 'lodash';
import Task from './Task';
import AddTask from './AddTask';
import TaskListTitle from './TaskListTitle';
import RemoveTaskList from './RemoveTaskList';

const TaskList = (props) => {
  const taskElems = _.map(props.tasks, (task, id) => <Task key={id} text={task.text} />);
  return (
    <div className='task-list'>
      <header>
        <TaskListTitle value={props.title} />
        <RemoveTaskList id={props.id} onRemove={props.onRemoveTaskList} />
      </header>
      <div className='tasks'>
        {taskElems}
      </div>
      <AddTask
        listId={props.id}
        onAddTask={props.onAddTask}
        onChange={props.onAddTaskInput}
        value={props.newTaskText} />
    </div>
  );
};

TaskList.propTypes = {
  id: React.PropTypes.string.isRequired,
  newTaskText: React.PropTypes.string.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
  onAddTaskInput: React.PropTypes.func.isRequired,
  onRemoveTaskList: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default TaskList;
