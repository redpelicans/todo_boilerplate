import React, { PropTypes } from 'react';
import Title from './title';

const Header = ({ title }) =>
  <header className="brand-header">
    <Title name={title} />
  </header>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
