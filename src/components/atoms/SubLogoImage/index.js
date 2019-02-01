import React from 'react';
import PropTypes from 'prop-types';

const img = type => {
  const svg = require(`./icons/${type}.svg`);
  return <img alt="SubIcon" src={svg} />;
};

const SubLogoImage = ({ type }) => <React.Fragment>{img(type)}</React.Fragment>;

SubLogoImage.propTypes = {
  type: PropTypes.string,
};

SubLogoImage.defaultProps = {
  type: 'nav',
};

export default SubLogoImage;
