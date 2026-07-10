import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';

const UseUserContext = () => {
  
  const context = useContext(UserContext);
  
  return context;
};
export default UseUserContext;