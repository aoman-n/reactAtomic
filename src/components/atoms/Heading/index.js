import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fontSize } from 'styles';

const getFontSize = type => {
  switch (type) {
    case 'section':
      return `font-size: ${fontSize.large}px;`;
    case 'blog':
      return `font-size: ${fontSize.small}px;`;
    case 'event':
      return `font-size: ${fontSize.medium}px;`;
    case 'menu':
      return `font-size: ${fontSize.xlarge}px;`;
    case 'date':
      return `font-size: ${fontSize.xSmall}px;`;
    default:
      return `font-size: ${fontSize.large}px;`;
  }
};
const fontColors = {
  black: colors.black,
  white: colors.white,
};

const Text = styled.h2`
  ${props => getFontSize(props.type)}
  color: ${props => fontColors[props.pallete]};
`;

const Heading = ({ type, pallete, children }) => (
  <Text {...{ type, pallete }}>{children}</Text>
);

Heading.propTypes = {
  type: PropTypes.oneOf(['section', 'blog', 'event', 'menu', 'date']),
  pallete: PropTypes.oneOf(['black', 'white']),
  children: PropTypes.node,
};

Heading.defaultProps = {
  type: 'section',
  pallete: 'black',
};

export default Heading;
