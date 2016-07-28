import React from 'react';

const Title = ({ value }) => <h1>{value}</h1>;

Title.propTypes = {
  value: React.PropTypes.string,
};

export default Title;
