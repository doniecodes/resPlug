import UseMarketContext from './UseMarketContext';
import { useState } from 'react';


const MarketHook = () => {
  
  //Hooks
  const {items, dispatch} = UseMarketContext();
  
  //States
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const getItems = async(id)=> {
    setError(null);
    setLoading(true);
    const uri = id ? `http://localhost:4000/items/${id}` : "http://localhost:4000/items";
    
    const res = await fetch(uri);
    const data = await res.json();
    
    if(!res.ok){
      setError("Could not fetch resource");
    }
    if(res.ok){
    dispatch({type: "SET_ITEMS", payload: data.items});
    setError(null);
    setLoading(false);
    }
    return data;
  }
  
  const createItem = async(creds)=> {
    
  }
  
  const deleteItem = async(creds)=> {
    
  }
  
  
  return {items, getItems, createItem, deleteItem, error, loading}
};

export default MarketHook;