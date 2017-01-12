import styled from 'styled-components';
import colors from '../../colors.json';

const Button = styled.button`
  border: none;
  width: 4em;
  height: 100%;
  cursor: pointer;
  transition: all .2s;
  font-size: 20px;
  background-color: white;
  &:hover {
    background-color: ${colors.blueGrey};
    color: white;
  }
`;

export default Button;
