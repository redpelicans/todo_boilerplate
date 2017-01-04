import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Title from './title';

const Wrapper = styled.header`
  text-align: center;
`;

const Header = ({ title }) =>
  <Wrapper>
    <Title name={title} />
  </Wrapper>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
