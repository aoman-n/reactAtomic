import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'styles';

import CircleIcon from 'components/atoms/CircleIcon';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  display: inline-flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  margin: 0 15px;
`;
const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 227px;
  margin: 0 15px;
  & h2 {
    padding: 10px 0;
  }
  & h3 {
    padding-bottom: 10px;
  }
`;

const Article = ({ link, title, date, src, content }) => (
  <Wrapper to={link}>
    <ImageContainer>
      <CircleIcon wide src={src} />
    </ImageContainer>
    <TextContainer>
      <Heading type="blog">{title}</Heading>
      <Heading type="date">{date}</Heading>
      <Paragraph left size="small">
        {content}
      </Paragraph>
    </TextContainer>
  </Wrapper>
);

Article.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
