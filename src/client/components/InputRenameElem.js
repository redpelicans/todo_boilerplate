import React from 'react'

const InputRenameElem = ({ id, idList, renameElem }) => {
  const handleRenameKeyPress = (e) => {
    if (e.key === 'Enter') {
      renameElem(e.target.value, id, idList);
    }
  }
  return (
    <input onKeyDown={handleRenameKeyPress} type='text'></input>
  );
}

InputRenameElem.propTypes = {
  id: React.PropTypes.number.isRequired,
  idList: React.PropTypes.number.isRequired,
  renameElem: React.PropTypes.func.isRequired }

export default InputRenameElem
