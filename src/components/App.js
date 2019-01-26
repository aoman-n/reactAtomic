import React from 'react';
import { Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

export default () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <p>hello world</p>
      </Switch>
    </div>
  )
}