import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from '.';

storiesOf('Button', module).add('inputText', () => (
  <InputText placeholder="名前" />
));
