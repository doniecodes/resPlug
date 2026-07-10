import UseChatsContext from './UseChatsContext';
import { useState } from 'react';


const ChatsHook = () => {
  
  //States
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  //Hooks
  const { dispatch } = UseChatsContext();
  
  //get chats
  const getChats = async(id)=> {
    setError(null);
    setLoading(true);
    const uri = id ? `http://localhost:8000/chats/${id}` : `http://localhost:8000/chats`;
    
    const res = await fetch(uri);
    const data = await res.json();
    
    if(!res.ok){
      setError("Could not fetch resource");
      setLoading(false);
    }
    if(res.ok){
    dispatch({type: "SET_CHATS", payload: data.chats});
    setError(null);
    setLoading(false);
    }
    return data;
  }
    
    //get conversations
  const getConversation = async(id)=> {
    setError(null);
    setLoading(true);
    const uri =`http://localhost:6000/${id}`;
    
    const res = await fetch(uri);
    const data = await res.json();
    
    if(!res.ok){
      setError("Could not fetch resource");
      setLoading(false);
    }
    if(res.ok){
    setError(null);
    setLoading(false);
    }
    return data;
  }
  
  //create chat
  const createChat = async(creds)=> {
    
  }
  
  //delete chat
  const deleteChat = async(creds)=> {
    
  }
  
  
  return {getChats, getConversation, createChat, deleteChat, error, loading}
  
}

export default ChatsHook;