import React, { PropTypes } from 'react';

const Title = ({ name }) =>
  <h1 className="brand-title">
    {name}
  </h1>
;

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
