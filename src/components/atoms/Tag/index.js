import React from 'react';
import styled from 'styled-components';
import { colors, fontSize } from 'styles';

const Label = styled.span`
  display: inline-block;
  height: 22px;
  width: 280px;
  line-height: 22px;
  background: ${colors.yellow};
  font-size: ${fontSize.xSmall}px;
  color: ${colors.white};
  text-align: center;
`;

const Tag = () => <Label>New</Label>;

export default Tag;
