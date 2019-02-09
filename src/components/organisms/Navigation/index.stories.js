import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '.';

storiesOf('Navigation', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/', 'items']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <Navigation />);
