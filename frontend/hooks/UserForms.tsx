import { useRouter } from 'expo-router';
import { useState } from 'react';

const UserForms = () => {
  
  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const router = useRouter();
  
  //hooks
  
  
  //signupUser
  const signupUser = async (email, password, fullName)=> {
    setLoading(true);
    setError(null);
    const res = await fetch("http://localhost:8000/user/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password, fullName})
      });
      
      const data = await res.json();
      
      if(!res.ok){
        setLoading(false);
        setError(data.error);
      }
      return data;
  }
  
  //loginUser
  const loginUser = async (email, password)=> {
    setLoading(true);
    setError(null);
    const res = await fetch("http://localhost:8000/user/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
      
      const data = await res.json();
      
      if(!res.ok){
        setLoading(false);
        setError(data.error);
      }
      return data;
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