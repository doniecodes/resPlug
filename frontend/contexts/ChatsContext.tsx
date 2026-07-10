import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';

export const ChatsContext = createContext();

export const chatsReducer = (state, action)=> {
  switch (action.type) {
    case "SET_CHATS": 
      return { chats: action.payload}
      
    case "CREATE_CHAT": 
      return { chats: [action.payload, ...state.chats]}
      
    case "DELETE_CHAT": 
      return { chats: state.chats.filter((x)=> x.id !== action.payload.id)}
      
  default: return state
}
};

export const ChatsContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(chatsReducer, {chats: null});
  
  
  return (
    <ChatsContext.Provider value={{...state, dispatch}}>
      {children}
    </ChatsContext.Provider>
  );
};