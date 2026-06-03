import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';

const FeedsContext = createContext();

const FeedsContextProvider = ({children}) => {
  
  
  
  return (
    <FeedsContext.Provider value={{createFeed, uodateFeed, deleteFeed}}>
      {children}
    </FeedsContext.Provider>
  );
};

export default FeedsContext;