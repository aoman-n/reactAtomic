import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button disabled={boolean('Disabled', false)}>
      {text('Label', '予約はこちら')}
    </Button>
  ));
