import React from 'react';

const Loading = ({ load }) => {
  let spinner = (<div></div>);
  if (load === 1) {
    spinner = (
      <div>JE SUIS UN SPINNER</div>
    );
  };
  return <div className='loadingzone'> {spinner} </div>
}

Loading.propTypes = {
  load: React.PropTypes.number.isRequired,
};

export default Loading;
