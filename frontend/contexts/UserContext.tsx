import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';

export const UserContext = createContext();

export const userReducer = (state, action)=> {
  switch (action.type) {
    case "SET_USER": 
      return { user: action.payload }
      
    case "LOGIN": 
      return { user: action.payload }
      
    case "LOGOUT": 
      return { user: null }
      
  default: return state
}
};

export const UserContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(userReducer, {user: null});
  
  
  return (
    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};