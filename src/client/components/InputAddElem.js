import React from 'react'

const InputAddElem = ({ addElem, id }) => {
  const handleRenameKeyPress = (e) => {
    if (e.key === 'Enter') {
      addElem(e.target.value, id);
    }
  }
  return (
    <input onKeyDown={handleRenameKeyPress} type='text'></input>
  );
}

InputAddElem.propTypes = {
  addElem: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired }

export default InputAddElem
