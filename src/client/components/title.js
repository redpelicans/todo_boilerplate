import React from 'react';

const Title = ({ title }) =>
		<div className='title'><h1>{ title }</h1></div>;

Title.propTypes = { title: React.PropTypes.string.isRequired };

export default Title;
