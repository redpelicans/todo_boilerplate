import React from 'react'

const InputRenameList = ({ id, renameList }) => {
  const handleRenameKeyPress = (e) => {
    if (e.key === 'Enter') {
      renameList(e.target.value, id);
    }
  }
  return (
    <input onKeyDown={handleRenameKeyPress} type='text'></input>
  );
}

InputRenameList.propTypes = {
  id: React.PropTypes.number.isRequired,
  renameList: React.PropTypes.func.isRequired }

export default InputRenameList
