import React from 'react';
import { Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Button from './atoms/Button';

export default () => {
  return (
    <div>
      <GlobalStyle />
      <Button text="予約する" />
      <Switch>
        <p>hello world</p>
      </Switch>
    </div>
  );
};
