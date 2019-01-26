import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles';

const Container = styled.button`
  height: 30px;
  width: 200px;
  border: 2px solid ${colors.white};
  background: ${props => (props.primary ? 'skyblue' : colors.darkYellow)};
  color: ${colors.white};
  cursor: pointer;
`;

const Button = ({ text, ...props }) => {
  return <Container {...props}>{text}</Container>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;