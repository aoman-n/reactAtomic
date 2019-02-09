import React from 'react';
import { MainVisual } from 'components';
import GlobalStyle from '../styles/GlobalStyle';
import Button from './atoms/Button';
import InputText from './atoms/InputText';

export default () => {
  return (
    <div>
      <GlobalStyle />
      <MainVisual height="460" />
      <Button>予約する</Button>
      <InputText placeholder="名前" />
    </div>
  );
};
