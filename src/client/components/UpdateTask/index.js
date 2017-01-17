import React, { PropTypes } from 'react';

import Modal from 'antd/lib/modal';
import Button from '../Button';
import ModalInput from '../ModalInput';

export default class UpdateTask extends React.Component {
  state = {
    visible: false,
    value: this.props.task.description,
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({ value: newProps.task.description });
  }

  updateTask = () => {
    const { value } = this.state;
    const { actions, task } = this.props;
    const { id, isCompleted, listId } = task;

    if (!value || value.length > 1000) return false;
    actions.task.update({ listId, id, description: value, isCompleted });
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
  actions: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};
