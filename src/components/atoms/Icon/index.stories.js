import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('Icons', module)
  .add('facebook', () => (
    <Icon icon="facebook" style={{ background: 'gray' }} />
  ))
  .add('pinterest', () => (
    <Icon icon="pinterest" style={{ background: 'gray' }} />
  ))
  .add('twitter', () => <Icon icon="twitter" style={{ background: 'gray' }} />);
