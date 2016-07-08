import React from 'react';
import _ from 'lodash';
import TaskList from './TaskList';

const TaskLists = (props) => {

  const listElems = _.map(props.lists, (list, id) => (
    <TaskList {...list} {...props} id={id} key={id} />
  ));

  return (
    <div className='task-lists'>
      {listElems}
    </div>
  );
};

TaskLists.propTypes = {
  lists: React.PropTypes.object.isRequired,
};

export default TaskLists;
