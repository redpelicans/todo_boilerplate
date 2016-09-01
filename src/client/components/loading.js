import React from 'react';

const Loading = ({ load }) => {
  let spinner = (<div></div>);
  if (load === 1) {
    spinner = (
      <span className="fa fa-refresh fa-spin fa-3x "></span>
    );
  }
  return <div className='load'> {spinner} </div>;
};

Loading.propTypes = {
  load: React.PropTypes.number.isRequired,
};

export default Loading;
