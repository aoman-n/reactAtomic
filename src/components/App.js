import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Button from './atoms/Button';
import InputText from './atoms/InputText';

export default () => {
  return (
    <div>
      <GlobalStyle />
      <Button>予約する</Button>
      <InputText placeholder="名前" />
    </div>
  );
};
