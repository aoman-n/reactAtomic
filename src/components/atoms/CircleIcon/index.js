import React from 'react';
import styled, { css } from 'styled-components';

const getSize = height => {
  if (height) {
    return `
      height: 152px;
      width: 152px;
    `;
  }
  return `
    height: 106px;
    width: 106px;
  `;
};

const StyledIcon = styled.div`
  display: inline-block;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  ${props => getSize(props.wide)}
  ${props =>
    props.withBorder &&
    css`
      border: 3px solid white;
    `}
`;

const CircleIcon = ({ src, withBorder, wide }) => (
  <StyledIcon {...{ src, withBorder, wide }} />
);

export default CircleIcon;
