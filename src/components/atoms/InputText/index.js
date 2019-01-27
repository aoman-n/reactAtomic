import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../styles';

const Input = styled.input`
  width: 335px;
  height: 34px;
  font-size: 12px;
  color: ${colors.white};
  background: #cab800;
  box-shadow: inset 0 1px 3px 0 rgba(114, 104, 0, 0.23);
  box-sizing: border-box;
  padding: 11px 10px;
  ::placeholder {
    color: ${colors.white};
  }
`;

const InputText = ({ placeholder }) => {
  const [text, setText] = useState('');
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputText;
