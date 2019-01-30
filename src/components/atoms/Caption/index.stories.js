import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'menu']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Caption to="/menu" label={text('label', 'メニュー')} />
  ));
