import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('with text', () => <Button>予約する</Button>)
  .add('primary', () => <Button primary>予約する</Button>);
