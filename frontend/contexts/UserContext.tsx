import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { AsyncStorage } from "@react-native-async-storage/async-storage";

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
  
  console.log(state);
  
  useEffect(()=> {
    // const getData = async()=> {
    // const dataToRetrieve = await AsyncStorage.getItem("user");
    // const data = dataToRetrieve != null && JSON.parse(dataToRetrieve)
    // dispatch({type: "SET_USER", payload: data});
    // }
  }, [])
  
  
  return (
    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};