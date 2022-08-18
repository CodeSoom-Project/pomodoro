import styled from '@emotion/styled';
import { FC } from 'react';
import { RetrospectForm } from 'typings';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 20rem;
`;

const TextArea = styled.textarea`
  width: 30em;
  max-width: 80%;
  height: 80%;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 2rem;
  border: 1px solid #ca995c;
  resize: none;
  outline: none;
  color: #876445;

  ::placeholder {
    color: #ca995c;
  }
`;

const Button = styled.button`
  display: block;
  margin: 0.5rem auto;
  padding: 1rem;
  border-radius: 1em;
  border: 1px solid #ca995c;
  color: white;
  background: #876445;
`;

const RetrospectModalForm: FC<RetrospectForm> = ({
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

export default RetrospectModalForm;
