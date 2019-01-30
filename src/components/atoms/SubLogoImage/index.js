import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: inline-block;
`;

const img = type => {
  const svg = require(`./icons/${type}.svg`);
  return <img alt="SubIcon" src={svg} />;
};

const SubLogoImage = ({ type, ...props }) => (
  <Wrapper {...props}>{img(type)}</Wrapper>
);

SubLogoImage.propTypes = {
  type: PropTypes.string,
};

SubLogoImage.defaultProps = {
  type: 'nav',
};

export default SubLogoImage;
