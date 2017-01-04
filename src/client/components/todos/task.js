import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 2em;
`;

const Task = ({ task, dispatch, onDel, onEdit }) =>
  <Wrapper>
    <input
      type="checkbox"
      onChange={
        () => dispatch(onEdit(
          Object.assign({}, task, { isChecked: !task.isChecked })
        ))}
      checked={task.isChecked}
    />
    <p style={task.isChecked ? { textDecoration: 'line-through' } : {}}>
      {task.title}
    </p>
    <button
      onClick={() => dispatch(onEdit(
        Object.assign({}, task, { title: `${task.title} edited` })
      ))}
    >editer</button>
    <button onClick={() => dispatch(onDel(task.id))}>supprimer</button>
  </Wrapper>;

Task.propTypes = {
  task: PropTypes.object,
  dispatch: PropTypes.func,
  onDel: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Task;
