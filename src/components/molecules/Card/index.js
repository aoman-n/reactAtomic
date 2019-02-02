import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Tag from 'components/atoms/Tag';

const Wrapper = styled.div`
  width: 250px;
  text-align: center;
  padding: 20px 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.48);
  position: relative;
  overflow: hidden;
`;
const TagFrame = styled.div`
  display: inline-block;
  transform: rotate(-45deg);
  position: absolute;
  top: 3%;
  left: -42%;
`;
const Title = styled.div`
  padding-bottom: 20px;
`;
const Date = styled.div`
  padding-bottom: 25px;
`;
const Content = styled.div``;

const Card = ({ title, date, content, ...props }) => (
  <Wrapper {...props}>
    <TagFrame>
      <Tag />
    </TagFrame>
    <Title>
      <Heading type="event" pallete="white">
        {title}
      </Heading>
    </Title>
    <Date>
      <Heading type="date" pallete="white">
        {date}
      </Heading>
    </Date>
    <Content>
      <Paragraph height="21" pallete="white">
        {content}
      </Paragraph>
    </Content>
  </Wrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
