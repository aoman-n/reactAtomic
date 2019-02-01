import React from 'react';
import { storiesOf } from '@storybook/react';
import desertImage from 'images/desert.jpeg';
import CircleIcon from '.';

storiesOf('CircleIcon', module)
  .add('menu icon', () => <CircleIcon icon={desertImage} isBorder />)
  .add('blog icon', () => <CircleIcon icon={desertImage} isHeight />);
