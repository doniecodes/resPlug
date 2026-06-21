import UseFeedsContext from './UseFeedsContext';
import { useState } from 'react';


const FeedsHook = () => {
  
  //Hooks
  const {feeds, dispatch} = UseFeedsContext();
  
  //States
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getFeeds = async(id)=> {
    setError(null);
    setLoading(true);
    const uri = id ? `http://localhost:4000/posts/${id}` : "http://localhost:4000/posts";
    
    const res = await fetch(uri);
    const data = await res.json();
    
    if(!res.ok){
      setError("Could not fetch resource");
    }
    if(res.ok){
    dispatch({type: "SET_FEEDS", payload: data.posts});
    setError(null);
    setLoading(false);
    }
    return data;
  }
  
  const createFeed = async(creds)=> {
    
  }
  
  const deleteFeed = async(creds)=> {
    
  }
  
  
  return {feeds, getFeeds, createFeed, deleteFeed, error, loading}
};

export default FeedsHook;