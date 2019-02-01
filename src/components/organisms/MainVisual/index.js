import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import LogoImage from 'components/atoms/LogoImage';
import mainImage from './mainvisual.jpg';

const Wrapper = styled.div`
  height: 460px;
  background: url(${mainImage}) no-repeat;
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  padding-bottom: 30px;
`;

const MainVisual = props => (
  <Wrapper {...props}>
    <Logo>
      <LogoImage />
    </Logo>
    <Button>予約はこちら</Button>
  </Wrapper>
);

export default MainVisual;
