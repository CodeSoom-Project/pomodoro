import styled from '@emotion/styled';
import { FC } from 'react';
import { TimeSelectLayout } from 'typings/styles';

const TimeSelectLayoutsStyle = styled.div<{ background: string }>`
  width: 100%;
  height: 100vh;
  background: ${props => props.background};
  text-align: center;
`;

const TimeSelectLayouts: FC<TimeSelectLayout> = ({ children, background }) => {
  return (
    <TimeSelectLayoutsStyle background={background}>
      {children}
    </TimeSelectLayoutsStyle>
  );
};

export default TimeSelectLayouts;
