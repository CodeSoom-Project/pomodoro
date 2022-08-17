import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setMode } from 'slice/time';

import CenterLayouts from 'styles/CenterLayouts';
import ModeButtons from 'styles/ModeButtons';

const SelectModeContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (path: string) => {
    dispatch(setMode(path));
    navigate(`${path}`);
  };

  return (
    <CenterLayouts>
      <ModeButtons onClick={() => handleNavigate('/focus')}>Focus</ModeButtons>
      <ModeButtons onClick={() => handleNavigate('/break')}>Break</ModeButtons>
    </CenterLayouts>
  );
};

export default SelectModeContainer;
