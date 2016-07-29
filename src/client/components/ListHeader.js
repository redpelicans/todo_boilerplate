import React from 'react';

const ListHeader = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRenameList(props.id);
  };

  const handleEnableClick = () => {
    props.onEnableRenameList(props.id);
  };

  const handleDeleteClick = () => {
    props.onDeleteList(props.id);
  };

  const handleChange = (e) => {
    props.onInputRenameList(e.target.value, props.id);
  };

  const button = (props.list.rename === true) ? 'Close' : 'Rename';

  const input = ((props.list.rename === true) ? (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' value={props.list.input}></input>
    </form>) : null);

  return (
    <div className='ListHeader'>
      <h2>{props.list.name}</h2>
      {input}
      <button onClick={handleEnableClick}>{button}</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

ListHeader.propTypes = {
  id: React.PropTypes.number.isRequired,
  list: React.PropTypes.object.isRequired,
  onDeleteList: React.PropTypes.func.isRequired,
  onEnableRenameList: React.PropTypes.func.isRequired,
  onInputRenameList: React.PropTypes.func.isRequired,
  onRenameList: React.PropTypes.func.isRequired };

export default ListHeader;
