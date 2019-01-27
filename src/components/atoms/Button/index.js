import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';

const Container = styled.button`
  height: 40px;
  width: 216px;
  box-shadow: 0px 0px 0px 3px
    ${props => (props.disabled ? colors.lightGray : colors.yellow)};
  border: solid 2px rgba(255, 255, 255, 0.47);
  background: ${props => (props.disabled ? colors.lightGray : colors.yellow)};
  color: ${props => (props.disabled ? '#DFDFDF' : colors.white)};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
