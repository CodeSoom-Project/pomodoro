import styled from '@emotion/styled';
import { FC } from 'react';
import { OnlyChildren } from 'typings/styles';

const CenterLayoutStyle = styled.div({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#D3E4CD',
});

const CenterLayouts: FC<OnlyChildren> = ({ children }) => {
  return <CenterLayoutStyle>{children}</CenterLayoutStyle>;
};

export default CenterLayouts;
