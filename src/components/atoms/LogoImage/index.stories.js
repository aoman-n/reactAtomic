import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import LogoImage from '.';

storiesOf('LogoImage', module)
  .addDecorator(withKnobs)
  .add('default', () => <LogoImage style={{ background: 'black' }} />)
  .add('tiny', () => (
    <LogoImage style={{ background: 'black' }} width={number('size', 100)} />
  ));
