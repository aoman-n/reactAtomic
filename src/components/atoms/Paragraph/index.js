import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSize } from 'styles';

const fontColors = {
  black: `${colors.black}`,
  white: `${colors.white}`,
};

const Text = styled.p`
  display: inline-block;
  text-align: center;
  font-size: ${props => (props.size === 'small' ? 12 : 14)}px;
  line-height: ${props => props.height || 18}px;
  color: ${props => fontColors[props.pallete]};
`;

const Paragraph = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

Paragraph.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  size: PropTypes.string,
  pallete: PropTypes.string,
};

Paragraph.defaultProps = {
  pallete: colors.black,
};

export default Paragraph;
