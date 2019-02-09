import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'items']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Button disabled={boolean('Disabled', false)}>
      {text('Label', '予約はこちら')}
    </Button>
  ))
  .add('primary', () => (
    <Button primary disabled={boolean('Disabled', false)}>
      {text('Label', '予約はこちら')}
    </Button>
  ))
  .add('link', () => <Button to="/items">itemsへ</Button>);
