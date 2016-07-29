import React from 'react';

const AddElem = ({ addelem, id, onAddElem, onInputAddElem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddElem(id);
  };

  const handleChange = (e) => {
    onInputAddElem(id, e.target.value);
  };

  return (
    <div onSubmit={handleSubmit}>
      <h3>New Task :</h3>
      <form>
        <input onChange={handleChange} type='text' value={addelem}></input>
      </form>
    </div>
  );
};

AddElem.propTypes = {
  addelem: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  onAddElem: React.PropTypes.func.isRequired,
  onInputAddElem: React.PropTypes.func.isRequired };

export default AddElem;
