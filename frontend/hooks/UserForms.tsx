import { useRouter } from 'expo-router';
import { useState } from 'react';
import UseUserContext from './UseUserContext';

import { supabase } from "../data/SupabaseConfig";

const UserForms = () => {
  
  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const router = useRouter();
  
  //hooks
  const { dispatch } = UseUserContext();
  
  const handleErrors = (email, password)=> {
    if(!email || !password){
      setError("Please fill in all fields");
    }
  }
  
  //signupUser
  const signupUser = async (id, email, password, username)=> {
    setLoading(true);
    setError(null);
    
    handleErrors(email, password);
    
    try{
    const { data, error } = await supabase
    .from("profiles")
    .insert([{id, email, password, username}]);
    
      if(error){
        setLoading(false);
        setError("Could not sign you up, check credentials");
      }
      if(data){
        console.log(data);
        setLoading(false);
        setError(null);
        dispatch({type: "LOGIN", payload: data})
      }
    } catch (error) {
      setLoading(false);
      setError("There was a problem signing you up, please try again later");
    }
  }
  
  //loginUser
  const loginUser = async (email, password) => {
    setLoading(true);
    setError(null);
    
    if(!email || !password){
      setError("Please fill in all fields");
    }
    
    try{
    const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("email", email);
    
      if(error){
        setLoading(false);
        setError("Could not log in, user not found");
      }
      if(data){
        setLoading(false);
        setError(null);
        dispatch({type: "LOGIN", payload: data.email})
      }
    } catch (error) {
      setLoading(false);
      setError("There was a problem signing you up, please try again later");
    }
  }
  
  // delete user 
  const deleteUser = async () => {
    
  }
  
  // update user 
  const updateUser = async () => {
    
  }
  
  return { signupUser, loginUser, deleteUser, updateUser, error, loading  }
};

export default UserForms;