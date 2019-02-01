import React from 'react';
import styled, { css } from 'styled-components';

const getSize = height => {
  if (height) {
    return `
      height: 230px;
      width: 230px;
    `;
  }
  return `
    height: 106px;
    width: 106px;
  `;
};

const StyledIcon = styled.div`
  display: inline-block;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  ${props => getSize(props.isHeight)}
  ${props =>
    props.isBorder &&
    css`
      border: 3px solid white;
    `}
`;

const CircleIcon = ({ icon, isBorder, isHeight }) => (
  <StyledIcon {...{ icon, isBorder, isHeight }} />
);

export default CircleIcon;
