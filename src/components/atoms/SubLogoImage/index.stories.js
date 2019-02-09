import React from 'react';
import { storiesOf } from '@storybook/react';
import SubLogoImage from '.';

storiesOf('SubLogoImage', module)
  .add('navType', () => <SubLogoImage type="nav" />)
  .add('footerType', () => (
    <SubLogoImage style={{ background: 'black' }} type="footer" />
  ));
