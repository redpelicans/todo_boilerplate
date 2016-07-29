import React from 'react';

const InputFormList = ({ value, ...actions }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    actions.onSubmitAddList();
  };
  const handleChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    actions.onChangeList(event.target.value);
  };
  console.log(value);
  return (
    <div className={ name }>
      <form onSubmit={ handleSubmit }>
        <input
          onChange={ handleChange }
          placeholder='New list...'
          type='text'
          value={ value }
        />
      </form>
    </div>
  );
};

InputFormList.propTypes = {
  value: React.PropTypes.string,
};

export default InputFormList;
