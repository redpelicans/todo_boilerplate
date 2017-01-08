import React from 'react';
import Switch from 'antd/lib/switch';
import Icon from 'antd/lib/icon';


class Task extends React.Component {
  // shouldComponentUpdate(nextProp, newState){

  // }
  state = {
    onEdit: false,
    value: this.props.task.title,
  }
  handleChange = (checked) => {
    const { task, manageTask } = this.props;
    manageTask(task.id, checked);
  }
  handleUpdate = () => {
    const { onEdit } = this.state;
    if (onEdit) this.setState({onEdit: false});
    else this.setState({onEdit: true});
  }
  handleUpDating = event => {
    this.setState({value: event.target.value})
  }
  handleConfirmUpdate = () => {
    const { updateTask, task } = this.props;
    const { value } = this.state;

    updateTask(task.id, value);
    this.setState({onEdit: false});
    this.handleChange(0);

  }

  render () {
    const { todo, task, delTask } = this.props;
    const { onEdit, value } = this.state;
    return (
      <div style={{marginBottom: '15px'}} >
        <Switch size="small" style={{float: 'left'}} defaultChecked={task.checked} checked={task.checked} onChange={this.handleChange} />
        {onEdit ?
          <input value={value} onChange={this.handleUpDating} />
          :
          <span onDoubleClick={() => this.handleUpdate()} style={task.checked ? { textDecoration: 'line-through', margin: '15px' } : {margin: '15px'}}> {task.title} </span>
        }
        <div style={{float: 'right'}}>
        {onEdit ?
          <Icon type="check" onClick={this.handleConfirmUpdate} />
          :
          <Icon style={{marginLeft: '9px'}} type="edit" onClick={() => this.handleUpdate()} />
         }
          <Icon style={{marginLeft: '9px'}} type="delete" onClick={() => delTask(task.id)}/>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  todo: React.PropTypes.object.isRequired,
  task: React.PropTypes.object.isRequired,
  delTask: React.PropTypes.func.isRequired,
  manageTask: React.PropTypes.func.isRequired,
  updateTask: React.PropTypes.func.isRequired,
}

export default Task;