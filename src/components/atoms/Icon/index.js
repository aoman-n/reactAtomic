import React from 'react';
import styled from 'styled-components';

const Image = styled.img``;

const Icon = ({ icon, ...props }) => {
  const svg = require(`./icons/${icon}.svg`);
  return <Image {...props} alt="icon" src={svg} />;
};

export default Icon;
