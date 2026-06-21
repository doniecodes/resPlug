import {FeedsContext} from '../contexts/FeedsContext';
import { useContext } from 'react';

const UseFeedsContext = () => {
  
  const context = useContext(FeedsContext);
  
  return context
};
export default UseFeedsContext;