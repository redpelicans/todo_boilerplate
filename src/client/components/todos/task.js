import React, { PropTypes } from 'react';
import { Row, Col } from 'antd/lib/grid';
import CheckBox from 'antd/lib/checkbox';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

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
      <Row type="flex" justify="space-between" gutter={16}>
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
              style={{ width: '80%' }}
            />) :
            (<p style={{ display: 'inline', textDecoration: task.isChecked ? 'line-through' : '' }}>
              {task.title}
            </p>)
          }
        </Col>
        <Col>
          {updateMode ?
            (<Button onClick={() => this.handleSubmit(task)} size="small">
              send
            </Button>) :
            (<Button onClick={() => this.setState({ updateMode: true })} size="small">
              update
            </Button>)
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
