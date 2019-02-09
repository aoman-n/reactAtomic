import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles';

const getColor = props => {
  if (props.primary) {
    return 'red';
  }
  if (props.secondary) {
    return 'blue';
  }
  return `${colors.yellow}`;
};

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  box-sizing: border-box;
  height: 40px;
  width: 216px;
  border: solid 2px rgba(255, 255, 255, 0.47);
  ${props =>
    props.disabled
      ? css`
          box-shadow: 0px 0px 0px 3px ${colors.lightGray};
          background: ${colors.lightGray};
          color: #dfdfdf;
        `
      : css`
          box-shadow: 0px 0px 0px 3px ${getColor(props)};
          background: ${getColor(props)};
          color: ${colors.white};
        `}
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.8s;
  :hover {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  ${styles}
`;

const LinkButton = styled(({ children, ...props }) => (
  <Link {...props}>{children}</Link>
))`
  ${styles}
`;

const Button = ({ children, ...props }) => {
  if (props.to) {
    return <LinkButton {...props}>{children}</LinkButton>;
  }
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
