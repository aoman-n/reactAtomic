import React from 'react';
import { storiesOf } from '@storybook/react';
import { eventData } from 'constants';
import Card from '.';

const style = { background: 'rgba(0, 0, 0, 0.6)' };

storiesOf('Card', module).add('default', () => (
  <Card {...eventData[0]} style={style} />
));
