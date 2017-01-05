import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;

class Task extends React.Component {
  state = {
    input: this.props.task.title,
    updateMode: false,
  }

  handleInputChange = e => this.setState({ input: e.target.value });

  handleInputValidation = (task) => {
    const { dispatch, onUpdate } = this.props;
    const { input } = this.state;
    dispatch(onUpdate({ ...task, title: input }));
    this.setState({ updateMode: false });
  }

  render() {
    const { input, updateMode } = this.state;
    const { task, dispatch, onDelete, onUpdate } = this.props;
    return (
      <Wrapper>
        <input
          type="checkbox"
          onChange={() => dispatch(onUpdate({ ...task, isChecked: !task.isChecked }))}
          checked={task.isChecked}
        />
        {updateMode ?
          (<input
            type="text"
            placeholder={task.title}
            value={input}
            onChange={this.handleInputChange}
          />) :
          (<p style={{ textDecoration: task.isChecked ? 'line-through' : '' }}>
            {task.title}
          </p>)
        }
        {updateMode ?
          (<button onClick={() => this.handleInputValidation(task)}>
            send
          </button>) :
          (<button onClick={() => this.setState({ updateMode: true })}>
            update
          </button>)
        }
        {updateMode ||
        <button onClick={() => dispatch(onDelete(task.id))}>
           delete
         </button>
        }
      </Wrapper>
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
