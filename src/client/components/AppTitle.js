import React from 'react';

const AppTitle = ({ isFetching }) => {

  const spinner = (isFetching) ? <div className='spinner'></div> : null;

  return (
    <div className='AppTitle'><h1>Todo List</h1>{spinner}</div>
  );
};

AppTitle.propTypes = { isFetching: React.PropTypes.number.isRequired };

export default AppTitle;
