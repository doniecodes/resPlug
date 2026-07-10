import { ChatsContext } from '../contexts/ChatsContext';
import { useContext } from 'react';

const UseChatsContext = () => {
  
  const context = useContext(ChatsContext);
  
  return context;
};
export default UseChatsContext;