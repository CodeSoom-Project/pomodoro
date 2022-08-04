import { useNavigate } from 'react-router-dom';

const SelectModeContainer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(`${path}`);
  };

  return (
    <>
      <button onClick={() => handleNavigate('/focus')}>Focus</button>
      <button>Break</button>
    </>
  );
};

export default SelectModeContainer;
