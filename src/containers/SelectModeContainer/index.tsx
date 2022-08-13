import { useNavigate } from 'react-router-dom';
import CenterLayouts from 'styles/CenterLayouts';

import ModeButtons from 'styles/ModeButtons';

const SelectModeContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
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
