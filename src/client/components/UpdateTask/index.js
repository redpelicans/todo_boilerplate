import React, { PropTypes } from 'react';

import Modal from 'antd/lib/modal';
import Button from '../Button';
import ModalInput from '../ModalInput';

export default class UpdateTask extends React.Component {
  state = {
    visible: false,
    value: this.props.value,
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({ value: newProps.value });
  }

  updateTask = () => {
    const { value } = this.state;
    const { dispatch, actions, taskID, todoID } = this.props;

    if (!value || value.length > 1000) return false;
    dispatch(actions.todo.updateTask({ todoID, taskID, title: value }));
    this.setState({ visible: false });
    return (true);
  }

  close = () => this.setState({ visible: false })

  showModal = () => this.setState({ visible: true });

  handleChange = e => this.setState({ value: e.target.value })

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.updateTask();
    }
  }

  render() {
    const { value, visible } = this.state;
    return (
      <div>
        <Button onClick={this.showModal}>&#x270E;</Button>
        <Modal
          title="Update your task here"
          visible={visible}
          onOk={this.updateTask}
          onCancel={this.close}
          footer={[
            <Button key={1} onClick={this.close}>Cancel</Button>,
            <Button key={2} onClick={this.updateTask}>Save</Button>,
          ]}
        >
          <ModalInput
            type="text"
            value={value}
            autoFocus
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            placeholder="type here..."
          />
        </Modal>
      </div>
    );
  }
}

UpdateTask.propTypes = {
  value: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  taskID: PropTypes.number.isRequired,
  todoID: PropTypes.number.isRequired,
};
