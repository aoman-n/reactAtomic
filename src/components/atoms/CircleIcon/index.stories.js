import React from 'react';
import { storiesOf } from '@storybook/react';
import desertImage from 'images/desert.jpeg';
import CircleIcon from '.';

storiesOf('CircleIcon', module)
  .add('menu icon', () => <CircleIcon src={desertImage} withBorder />)
  .add('blog icon', () => <CircleIcon src={desertImage} wide />);
