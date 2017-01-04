import React, { PropTypes } from 'react';
import Modal from 'antd/lib/modal';

import Button from '../Button';
import FullHeightContainer from '../FullHeightContainer';
import ModalInput from '../ModalInput';

export default class AddTask extends React.Component {
  state = {
    visible: false,
    value: '',
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.saveTask();
    }
  }

  close = () => this.setState({ visible: false })

  showModal = () => this.setState({ visible: true })

  handleChange = e => this.setState({ value: e.target.value });

  saveTask = () => {
    const { value } = this.state;
    const { dispatch, actions, todoID } = this.props;

    dispatch(actions.todo.addTask({ title: value, todoID }));
    this.setState({ value: '', visible: false });
  }

  render() {
    const { visible, value } = this.state;
    return (
      <FullHeightContainer>
        <Button onClick={this.showModal}>&#10010;</Button>
        <Modal
          title="Enter your task here"
          visible={visible}
          onOk={this.saveTask}
          onCancel={this.close}
          footer={[
            <Button key={1} onClick={this.close}>Cancel</Button>,
            <Button key={2} onClick={this.saveTask}>Save</Button>,
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
      </FullHeightContainer>
    );
  }
}

AddTask.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  todoID: PropTypes.number.isRequired,
};
