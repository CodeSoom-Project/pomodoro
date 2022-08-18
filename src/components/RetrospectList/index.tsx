import { FC } from 'react';

import styled from '@emotion/styled';

import { Retrospect } from 'typings';

const P = styled.p`
  margin-bottom: 1rem;
  overflow-x: hidden;
  word-break: break-all;
`;

const RetrospectList: FC<Retrospect> = ({ retrospect, id }) => {
  return (
    <>
      <P>
        {id + 1}. {retrospect.contents}
      </P>
    </>
  );
};

export default RetrospectList;
