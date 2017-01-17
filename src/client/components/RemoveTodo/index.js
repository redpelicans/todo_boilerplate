import React, { PropTypes } from 'react';

import Modal from 'antd/lib/modal';
import FullHeightContainer from '../FullHeightContainer';
import Button from '../Button';

export default class RemoveTodo extends React.Component {
  state = {
    visible: false,
  }

  close = () => this.setState({ visible: false })

  showModal = () => this.setState({ visible: true })

  removeTodo = () => {
    const { actions, listId } = this.props;

    actions.todo.remove(listId);
  }

  render() {
    const { visible } = this.state;
    return (
      <FullHeightContainer>
        <Button onClick={this.showModal}>&#x2716;</Button>
        <Modal
          visible={visible}
          onOk={this.removeTodo}
          onCancel={this.close}
          footer={[
            <Button key={1} onClick={this.close}>NO</Button>,
            <Button key={2} onClick={this.removeTodo}>YES</Button>,
          ]}
        >
          ARE YOU SURE ?
        </Modal>
      </FullHeightContainer>
    );
  }
}

RemoveTodo.propTypes = {
  actions: PropTypes.object.isRequired,
  listId: PropTypes.number.isRequired,
};
