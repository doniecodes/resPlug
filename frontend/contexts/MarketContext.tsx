import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';

export const MarketContext = createContext();

export const itemsReducer = (state, action)=> {
  switch (action.type) {
    case "SET_ITEMS": 
      return { items: action.payload}
      
    case "CREATE_ITEM": 
      return { items: [action.payload, ...state.items]}
      
    case "DELETE_ITEM": 
      return { feeds: state.feeds.filter((x)=> x.id !== action.payload.id)}
      
  default: return state
}
};

export const MarketContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(itemsReducer, {items: null});
  
  
  return (
    <MarketContext.Provider value={{...state, dispatch}}>
      {children}
    </MarketContext.Provider>
  );
};