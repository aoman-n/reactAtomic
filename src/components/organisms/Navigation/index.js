import React from 'react';
import styled from 'styled-components';
import SubLogoImage from 'components/atoms/SubLogoImage';
import NavLinks from 'components/molecules/NavLinks';

const Wrapper = styled.div`
  display: inline-flex;
`;
const Logo = styled.div`
  padding: 0 45px;
  display: grid;
  align-items: center;
`;
const navLeftItems = [
  { label: 'メニュー', to: '/menu' },
  { label: '当店について', to: '/store' },
  { label: 'イベント', to: '/event' },
];
const navRightItems = [
  { label: 'ブログ', to: '/blog' },
  { label: 'アクセス', to: '/access' },
  { label: 'ご予約', to: '/reservation' },
];

const Navigation = ({ ...props }) => (
  <Wrapper {...props}>
    <NavLinks items={navLeftItems} />
    <Logo>
      <SubLogoImage />
    </Logo>
    <NavLinks items={navRightItems} />
  </Wrapper>
);

export default Navigation;
