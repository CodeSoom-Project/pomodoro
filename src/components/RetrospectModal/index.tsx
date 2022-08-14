import styled from '@emotion/styled';
import { FC } from 'react';
import { RetrospectModalType } from 'typings';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 20rem;
`;

const TextArea = styled.textarea`
  width: 30em;
  height: 80%;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  resize: none;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  padding: 1rem;
  border-radius: 1em;
`;

const RetrospectModal: FC<RetrospectModalType> = ({
  onChangeRetrospect,
  submitRetrospect,
  retrospect,
}) => {
  return (
    <Wrapper>
      <form onSubmit={submitRetrospect}>
        <TextArea
          onChange={onChangeRetrospect}
          placeholder="간단한 회고를 작성해주세요."
          value={retrospect?.contents}
        />
        <Button type="submit">작성하기</Button>
      </form>
    </Wrapper>
  );
};

export default RetrospectModal;
