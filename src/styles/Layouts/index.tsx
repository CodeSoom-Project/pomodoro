import { FC } from 'react';

import styled from '@emotion/styled';

import { Layout } from 'typings/styles';

const LayoutStyle = styled.div<{ background: string }>`
  width: 100%;
  height: 100vh;
  background: ${props => props.background};
  text-align: center;
`;

const Layouts: FC<Layout> = ({ children, background }) => {
  return <LayoutStyle background={background}>{children}</LayoutStyle>;
};

export default Layouts;
