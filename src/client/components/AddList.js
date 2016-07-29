import React from 'react';

const AddList = ({ addlist, onAddList, onInputAddList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddList();
  };

  const handleChange = (e) => {
    onInputAddList(e.target.value);
  };

  return (
    <div className='List' onSubmit={handleSubmit}>
      <h2>New List :</h2>
      <form>
        <input onChange={handleChange} type='text' value={addlist}></input>
      </form>
    </div>
  );
};

AddList.propTypes = {
  addlist: React.PropTypes.string.isRequired,
  onAddList: React.PropTypes.func.isRequired,
  onInputAddList: React.PropTypes.func.isRequired };

export default AddList;
