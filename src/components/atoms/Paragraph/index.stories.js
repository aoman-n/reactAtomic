import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Paragraph from '.';

const infoText = `Bon Houseは人気名物料理の「フォアグラのソテー」や「果物サラダ」が人気のフレンチレストランです。
京都らしい鴨川沿いにあり、どのお席からでも鴨川の景色を眺めることができます。
春から夏にかけては川床もご用意しております！
また、ワインはフランス帰りの料理人やソムリエがご提案。`;
const menuText = `その日に採れた野菜や果物など、こだわりの料理`;
const InfoFrame = styled.div`
  width: 600px;
  margin: 0 auto;
`;
const MenuFrame = styled.div`
  width: 250px;
  margin: 0 auto;
`;

storiesOf('Paragraph', module)
  .add('Info', () => (
    <InfoFrame>
      <Paragraph height="28">{infoText}</Paragraph>
    </InfoFrame>
  ))
  .add('menu description', () => (
    <MenuFrame>
      <Paragraph height="21" left>
        {menuText}
      </Paragraph>
    </MenuFrame>
  ));
