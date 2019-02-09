import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fontSize, colors } from '../../../styles/index';

const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-size: ${fontSize.tiny}px;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

const Caption = ({ label, to }) => <Wrapper to={to}>{label}</Wrapper>;

Caption.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Caption;
