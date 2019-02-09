import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Heading from '.';

const Frame = styled.div`
  width: 227px;
`;

storiesOf('Heading', module)
  .add('Section', () => (
    <Heading type="section" pallete="black">
      京都の美しい夜景をたのしむレストラン
    </Heading>
  ))
  .add('Menu Title', () => (
    <Heading type="menu" pallete="white">
      Food Menu
    </Heading>
  ))
  .add('Blog Title', () => (
    <Frame>
      <Heading type="blog" pallete="black">
        昨年好評だったベリーサラダが今年も始まりました
      </Heading>
    </Frame>
  ))
  .add('Event Title', () => (
    <Heading type="event" pallete="white">
      オープン記念party
    </Heading>
  ))
  .add('Date', () => <Heading type="date">2019.01.28</Heading>);
