import styled from '@emotion/styled';
import { FC } from 'react';
import { ModeButton } from 'typings/styles';

const ModeButtonsStyle = styled.button({
  width: '50%',
  padding: '1.5em .5rem',
  margin: '0 1rem',

  borderRadius: '3rem',
  border: '.3rem solid #FEF5ED',

  background: '#ADC2A9',

  color: 'white',

  fontWeight: '700',
  fontSize: '3rem',

  '&:hover': {
    padding: '9rem',
    fontSize: '4rem',
    color: '#FEF5ED',
  },
});
const ModeButtons: FC<ModeButton> = ({ children, onClick }) => {
  return <ModeButtonsStyle onClick={onClick}>{children}</ModeButtonsStyle>;
};

export default ModeButtons;
