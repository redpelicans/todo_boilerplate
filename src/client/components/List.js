import React from 'react';
import ListHeader from './ListHeader';
import Tasks from './Tasks';
import _ from 'lodash';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.name !== this.props.name) {
      return true;
    }
    if (_.isEqual(this.props.tasks, nextProps.tasks) !== true) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className='List'>
        <ListHeader
          id={this.props.id}
          name={this.props.name}
          onDeleteList={this.props.onDeleteList}
          onRenameList={this.props.onRenameList} />
        <Tasks
          idList={this.props.id}
          onAddTask={this.props.onAddTask}
          onDeleteTask={this.props.onDeleteTask}
          onRenameTask={this.props.onRenameTask}
          tasks={this.props.tasks} />
      </div>);
  }
}

List.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onAddTask: React.PropTypes.func.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onDeleteTask: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired,
  onRenameTask: React.PropTypes.func.isRequired,
  tasks: React.PropTypes.object.isRequired };
