import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Switch, Button } from 'antd';

const SingleTask = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`;

const TaskName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0.5em;
`;

class Task extends React.Component {
  state = {
    editStatus: true,
    value: this.props.task.name,
  }
  handleToggle = () => {
    const { actions, dispatch, task, todo } = this.props;
    dispatch(actions.toggleCompleted(todo.id, task));
  }
  handleEdit = () => {
    const { actions, dispatch } = this.props;
    const { editStatus } = this.state;
    console.log('Launch Edit task');
    if (editStatus) {
      this.setState({ editStatus: false });
    } else {
      this.setState({ editStatus: true });
    }
    dispatch(actions.updateValue());
  }
  handleChange = event => this.setState({ value: event.target.value });
  render() {
    const { actions, task, todo } = this.props;
    const { editStatus, value } = this.state;
    const ifChecked = todo.tasks[task.id].checked;
    return (
      <SingleTask>
        <Switch checked={ifChecked} defaultChecked={ifChecked} onChange={this.handleToggle} />
        { editStatus ?
          <TaskName>{ task.name }</TaskName>
        :
          <input onChange={this.handleChange} value={value} />
        }
        <Button type="ghost" icon="edit" onClick={this.handleEdit} />
        <Button type="ghost" icon="delete" onClick={() => actions.deleteTask(todo.id, task.id)} />
      </SingleTask>);
  }
}

Task.propTypes = {
  actions: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Task;
