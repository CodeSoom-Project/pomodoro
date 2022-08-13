import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const ModalButtonStyle = styled.button({});

const ModeButton = ({ children }: PropsWithChildren) => {
  return <ModalButtonStyle>{children}</ModalButtonStyle>;
};

export default ModeButton;
