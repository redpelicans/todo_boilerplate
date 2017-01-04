import React, { PropTypes } from 'react';
import Title from './title';
import styled from 'styled-components';

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
