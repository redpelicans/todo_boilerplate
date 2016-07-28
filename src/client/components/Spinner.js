import React from 'react';

const Spinner = ({ lists, tasks }) => {
  let spin;
  if (lists.isFetching || tasks.isFetching) {
    spin = (
        <div className='double-bounce'>
          <div className='double-bounce1'></div>
          <div className='double-bounce2'></div>
        </div>
    );
  }

  return (
    <div className='spinner'>
      {spin}
    </div>
  );
};

Spinner.propTypes = {
  lists: React.PropTypes.object,
  tasks: React.PropTypes.object,
};

export default Spinner;
