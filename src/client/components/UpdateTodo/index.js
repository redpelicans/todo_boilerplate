import React, { PropTypes } from 'react';

import Modal from 'antd/lib/modal';
import Button from '../Button';
import FullHeightContainer from '../FullHeightContainer';
import ModalInput from '../ModalInput';

export default class UpdateTodo extends React.Component {
  state = {
    visible: false,
    value: this.props.label,
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({ value: newProps.label });
  }

  updateTodo = () => {
    const { value } = this.state;
    const { actions, listId } = this.props;

    if (!value || value.length > 1000) return false;
    actions.todo.update({ id: listId, label: value });
    this.setState({ visible: false });
    return (true);
  }

  close = () => this.setState({ visible: false })

  showModal = () => this.setState({ visible: true });

  handleChange = e => this.setState({ value: e.target.value })

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.updateTodo();
    }
  }

  render() {
    const { value, visible } = this.state;
    return (
      <FullHeightContainer>
        <Button onClick={this.showModal}>&#x270E;</Button>
        <Modal
          title="Update your todo here"
          visible={visible}
          onOk={this.updateTodo}
          onCancel={this.close}
          footer={[
            <Button key={1} onClick={this.close}>Cancel</Button>,
            <Button key={2} onClick={this.updateTodo}>Save</Button>,
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

UpdateTodo.propTypes = {
  label: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  listId: PropTypes.number.isRequired,
};
