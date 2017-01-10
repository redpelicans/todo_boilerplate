import React from 'react';
import styled from 'styled-components';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';

const Wrapper = styled.div`
  padding: 0px;
  float: left;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
`;

const TextInput = styled.input`
  margin: 0px;
  margin-right: 5px;
  width: 85%;
  height: 25px;
`;

const ValidButton = ( { value, todo, addTask } ) => (
  <div>
    <button onClick={() => addTask(value, todo.id)}>+</button>
  </div>
);

ValidButton.propTypes = {
  todo: React.PropTypes.object.isRequired,
  addTask: React.PropTypes.func.isRequired,
};

class MyModal extends React.Component {
  state = {
    value: '',
    visible: false,
  }
  handleChange = event => this.setState({value: event.target.value})
  handleClick = (value) => {
    const { addTask } = this.props;
    addTask(value);
    this.setState({value: ''});
  }

  showModal = () => this.setState({ visible: true })

  handleOk = () => this.setState({ visible: false })

  handleCancel = () => this.setState({ visible: false })

  validateTask = (todoId, value) => {
    const { addTask } = this.props;
    if (value !== '') {
      addTask(value, todoId)
      this.handleClick(value);
      this.handleCancel();
    };
  }

  render() {
    const { todo, onDel, addTask } = this.props
    const { value } = this.state;
    return (
      <Wrapper>
        <Button type="primary" size='small' style={{marginRight: '5px', border: 'none'}} onClick={this.showModal}>+</Button>
        <Modal title="Add Task" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} footer={[<button key='ValidButton' onClick={() => this.validateTask(todo.id, value)}>+</button>]} >
          <TextInput placeholder="Add new task ..." onChange={this.handleChange} value={value} />
        </Modal>
      </Wrapper>
    );
  }
}

MyModal.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onDel: React.PropTypes.func.isRequired,
  addTask: React.PropTypes.func.isRequired,
};


export default MyModal;
