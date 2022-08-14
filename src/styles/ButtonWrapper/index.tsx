import styled from '@emotion/styled';
import { FC } from 'react';
import { OnlyChildren } from 'typings/styles';

const ButtonWrapperStyle = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
  margin: 'auto',
});

const ButtonWrapper: FC<OnlyChildren> = ({ children }) => {
  return <ButtonWrapperStyle>{children}</ButtonWrapperStyle>;
};

export default ButtonWrapper;
