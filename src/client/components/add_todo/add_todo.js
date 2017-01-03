import React, { PropTypes } from 'react';

const AddTodo = ({ dispatch, onAdd }) =>
  <div className="add-todo">
    <input type="text" placeholder="titre" />
    <button onClick={() => dispatch(onAdd('new todo'))}>+</button>
  </div>
;

AddTodo.propTypes = {
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTodo;
