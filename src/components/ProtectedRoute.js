import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from './Auth';

export const ProtectedRoute = ({children}) => {
  const auth =  useAuth();
  // const navigate = useNavigate();
  // console.log('authuser : ', auth.user);

  return children;
}