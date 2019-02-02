import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Caption from '../../atoms/Caption';

const Wrapper = styled.ul`
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  width: auto;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
`;

const NavLinks = ({ items }) => (
  <Wrapper>
    {items.map(item => (
      <Li key={item.label}>
        <Caption key={item.label} {...item} />
      </Li>
    ))}
  </Wrapper>
);

NavLinks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
};

export default NavLinks;
