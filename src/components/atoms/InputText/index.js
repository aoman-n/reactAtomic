import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles';

const styles = css`
  width: 335px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.white};
  background: #cab800;
  box-shadow: inset 0 1px 3px 0 rgba(114, 104, 0, 0.23);
  box-sizing: border-box;
  padding: 11px 10px;
  ::placeholder {
    color: rgba(255, 255, 255, 0.64);
  }
`;

const TextInput = styled.input`
  ${styles}
`;

const Input = ({ ...props }) => {
  return <TextInput type="text" {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '名前',
};

export default Input;
