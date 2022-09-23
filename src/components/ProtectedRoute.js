import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './Auth';

export const ProtectedRoute = ({children, props}) => {
  const auth = useAuth();
  const navigate = useNavigate();
  // console.log('authuser : ', auth.user);
 
  useEffect(() => {
    if(!auth.token){
      navigate('/');
    }
  }, [auth.token]);

  return children;
}