import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .add('with text', () => <Button text="storybook" />)
  .add('primary', () => <Button text="primary" primary />);
