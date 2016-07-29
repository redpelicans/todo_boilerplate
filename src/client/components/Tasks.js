import React from 'react';
import _ from 'lodash';
import Task from './Task';
import AddTask from './AddTask';

const Tasks = (props) => {
  const data = _.map(props.tasks, (task) => (
        <Task
          description={task.description}
          id={Number(task.id)}
          key={task.id}
          onDeleteTask={props.onDeleteTask}
          onRenameTask={props.onRenameTask} />));
  return (
    <div className='Elems'>
      {data}
      <AddTask
        id={props.idList}
        onAddTask={props.onAddTask} />
    </div>
  );
};

Tasks.propTypes = {
  idList: React.PropTypes.number.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
  onDeleteTask: React.PropTypes.func.isRequired,
  onRenameTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired };

export default Tasks;
