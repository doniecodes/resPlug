import { MarketContext } from '../contexts/MarketContext';
import { useContext } from 'react';

const UseMarketContext = () => {
  
  const context = useContext(MarketContext);
  
  return context;
};
export default UseMarketContext;