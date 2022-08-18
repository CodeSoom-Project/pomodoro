import { FC } from 'react';

import styled from '@emotion/styled';

import { RemainTime } from 'typings';

import Header from 'styles/Header';
import Layouts from 'styles/Layouts';

import { fadeIn } from 'animation/fade';
import { Mode } from 'typings/time';

const Times = styled.p`
  margin-bottom: 2rem;
  color: white;

  font-weight: 800;
  font-size: 6rem;
`;

const Button = styled.button`
  font-size: 2.5rem;
  font-weight: 700;

  border: none;

  background: transparent;
  color: #f3f3f3fa;
  animation: ${fadeIn} 2s ease;
  :hover {
    font-size: 2.8rem;
    color: white;
    transition: all ease 0.5s;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Time: FC<RemainTime> = ({
  remainTime,
  endPomodoro,
  isPause,
  pause,
  resume,
  mode,
  navigator,
}) => {
  return (
    <Layouts background={mode === Mode.Focus ? '#76BA99' : '#876445'}>
      {mode === Mode.Focus ? <Header>Focus</Header> : <Header>Break</Header>}

      <Times>{remainTime}</Times>

      {!isPause && <Button onClick={pause}>일시 정지</Button>}
      {isPause && (
        <ButtonWrapper>
          <Button onClick={resume}>재개</Button>
          {mode === Mode.Focus ? (
            <Button onClick={navigator}>휴식하기</Button>
          ) : (
            <Button onClick={navigator}>집중하기</Button>
          )}
          <Button onClick={endPomodoro}>일정 종료</Button>
        </ButtonWrapper>
      )}
    </Layouts>
  );
};

export default Time;
