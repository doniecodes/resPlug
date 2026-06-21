import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';

export const FeedsContext = createContext();

export const feedsReducer = (state, action)=> {
  switch (action.type) {
    case "SET_FEEDS": 
      return { feeds: action.payload}
      
    case "CREATE_FEED": 
      return { feeds: [action.payload, ...state.feeds]}
      
    case "DELETE_FEED": 
      return { feeds: state.feeds.filter((x)=> x.id !== action.payload.id)}
      
  default: return state
}
};

export const FeedsContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(feedsReducer, {feeds: null});
  
  
  return (
    <FeedsContext.Provider value={{...state, dispatch}}>
      {children}
    </FeedsContext.Provider>
  );
};