import React from 'react';

const Todo = ({ taskName }) =>
  <div>
    <input type="checkbox" />
    { taskName }
    <button>edit</button>
    <button>del</button>
  </div>
;

export default Todo;
