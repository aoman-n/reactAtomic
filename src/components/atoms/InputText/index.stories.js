import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '.';

storiesOf('InputText', module).add('default', () => (
  <InputText placeholder="名前" />
));
