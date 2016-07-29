import React from 'react';

const Title = ({ title }) => <div className='title'><h2>{ title }</h2></div>;

Title.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Title;
