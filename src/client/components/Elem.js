import React from 'react';

const Elem = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRenameElem(props.id);
  };

  const handleChange = (e) => {
    props.onInputRenameElem(props.id, e.target.value);
  };

  const handleDeleteClick = () => {
    props.onDeleteElem(props.id);
  };

  const handleDoneClick = () => {
    props.onDoneElem(props.id);
  };

  const handleEnableClick = () => {
    props.onEnableRenameElem(props.id);
  };

  const button = (props.elem.rename === true) ? 'Close' : 'Rename';

  const done = (props.elem.done === true) ? 'Undone' : 'Done';

  const input = ((props.elem.rename === true) ? (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' value={props.elem.input}></input>
    </form>) : null);

  return (
    <div>
      <p>{props.elem.name}</p>
      <button onClick={handleDoneClick}>{done}</button>
      {input}
      <button onClick={handleEnableClick}>{button}</button>
      <button onClick={handleDeleteClick}>Delete Task</button>
    </div>
  );
};

Elem.propTypes = {
  elem: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  onDeleteElem: React.PropTypes.func.isRequired,
  onEnableRenameElem: React.PropTypes.func.isRequired,
  onRenameElem: React.PropTypes.func.isRequired };

export default Elem;
