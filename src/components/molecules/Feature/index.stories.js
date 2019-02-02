import React from 'react';
import { storiesOf } from '@storybook/react';
import { menuData } from 'constants';
import { colors } from 'styles';
import Feature from '.';

const { title, content, src } = menuData[0];

const style = { background: `${colors.yellow}` };

storiesOf('Feature', module).add('default', () => (
  <Feature style={style} {...{ title, content, src }} />
));
