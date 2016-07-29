import React from 'react';

const Refresh = ({ onRefresh }) => {
  const handleRender = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRefresh();
  };
  return (
    <div className='render'> <button onClick={ handleRender }>refresh</button></div>
  );
};

Refresh.propTypes = {
  onRefresh: React.PropTypes.func.isRequired,
};

export default Refresh;
