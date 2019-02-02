import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '.';

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
    <Heading type="blog" pallete="black">
      昨年好評だったベリーサラダが今年も始まりました
    </Heading>
  ))
  .add('Event Title', () => (
    <Heading type="event" pallete="white">
      オープン記念party
    </Heading>
  ));
