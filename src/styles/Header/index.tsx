import styled from '@emotion/styled';
import { FC } from 'react';
import { OnlyChildren } from 'typings/styles';

const HeaderStyle = styled.h1({
  paddingTop: '1em',
  marginBottom: '2rem',

  color: '#EDDFB3',

  fontSize: '6em',
});

const Header: FC<OnlyChildren> = ({ children }) => {
  return <HeaderStyle>{children}</HeaderStyle>;
};

export default Header;
