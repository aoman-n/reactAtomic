import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NavLinks from '.';

const navLeft = [
  { label: 'メニュー', to: '/menu' },
  { label: '当店について', to: '/store' },
  { label: 'イベント', to: '/event' },
];

const navRight = [
  { label: 'ブログ', to: '/blog' },
  { label: 'アクセス', to: '/access' },
  { label: 'ご予約', to: '/reservation' },
];

storiesOf('NavLinks', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'items']}>{story()}</MemoryRouter>
  ))
  .add('nav left', () => <NavLinks items={navLeft} />)
  .add('nav right', () => <NavLinks items={navRight} />);
