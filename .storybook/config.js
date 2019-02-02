import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyle from 'styles/GlobalStyle';

const req = require.context('components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div>
    <GlobalStyle />
    {story()}
  </div>
))

configure(loadStories, module);