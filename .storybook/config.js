import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body { margin: 10px; }
`;

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