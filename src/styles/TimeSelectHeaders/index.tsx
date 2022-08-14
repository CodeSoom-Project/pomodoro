import styled from '@emotion/styled';
import { FC } from 'react';
import { OnlyChildren } from 'typings/styles';

const TimeSelectHeadersStyle = styled.h1({
  paddingTop: '1em',
  marginBottom: '1em',

  color: '#EDDFB3',

  fontSize: '6em',
});

const TimeSelectHeaders: FC<OnlyChildren> = ({ children }) => {
  return <TimeSelectHeadersStyle>{children}</TimeSelectHeadersStyle>;
};

export default TimeSelectHeaders;
