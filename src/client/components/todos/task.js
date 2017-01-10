import React, { PropTypes } from 'react';
import styled from 'styled-components';
import CheckBox from 'antd/lib/checkbox';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Col = styled.div``;

class Task extends React.Component {
  state = {
    input: this.props.task.title,
    updateMode: false,
  }

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (task) => {
    const { dispatch, onUpdate } = this.props;
    const { input } = this.state;
    dispatch(onUpdate({ ...task, title: input }));
    this.setState({ updateMode: false });
  }

  render() {
    const { input, updateMode } = this.state;
    const { task, dispatch, onDelete, onUpdate } = this.props;
    return (
      <Row>
        <Col>
          <CheckBox
            onChange={() => dispatch(onUpdate({ ...task, isChecked: !task.isChecked }))}
            checked={task.isChecked}
          />
          {updateMode ?
            (<Input
              placeholder={task.title}
              value={input}
              onChange={this.handleInput}
              size="small"
              style={{ width: '150px' }}
            />) :
            (<p style={{ display: 'inline', textDecoration: task.isChecked ? 'line-through' : '' }}>
              {task.title}
            </p>)
          }
        </Col>
        <Col>
          {updateMode ?
            (<Button onClick={() => this.handleSubmit(task)} size="small" icon="check" />) :
            (<Button onClick={() => this.setState({ updateMode: true })} size="small" icon="edit" />)
          }
          {updateMode ||
            <Button onClick={() => dispatch(onDelete(task.id))} icon="close" size="small" />
          }
        </Col>
      </Row>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default Task;
