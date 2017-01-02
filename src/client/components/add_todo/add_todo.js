import React, { PropTypes } from 'react';

const AddTodo = ({ addTodo }) =>
  <div className="add-todo">
    <input type="text" placeholder="titre" />
    <button onClick={addTodo}>+</button>
  </div>
;

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodo;
