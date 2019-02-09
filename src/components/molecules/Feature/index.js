import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleIcon from 'components/atoms/CircleIcon';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const Wrapper = styled.div`
  width: 250px;
  padding: 30px 0;
  text-align: center;
`;
const Icon = styled.div``;
const Title = styled.div`
  margin: 20px 0;
`;
const Content = styled.div``;

const Feature = ({ src, title, content, ...props }) => (
  <Wrapper {...props}>
    <Icon>
      <CircleIcon withBorder src={src} />
    </Icon>
    <Title>
      <Heading type="menu">{title}</Heading>
    </Title>
    <Content>
      <Paragraph height="21">{content}</Paragraph>
    </Content>
  </Wrapper>
);

Feature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Feature;
