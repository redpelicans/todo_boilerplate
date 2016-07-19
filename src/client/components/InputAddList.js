import React from 'react'

const InputAddList = ({ addList }) => {
  const handleRenameKeyPress = (e) => {
    if (e.key === 'Enter') {
      addList(e.target.value);
    }
  }
  return (
    <input onKeyDown={handleRenameKeyPress} type='text'></input>
  );
}

InputAddList.propTypes = { addList: React.PropTypes.func.isRequired }

export default InputAddList
