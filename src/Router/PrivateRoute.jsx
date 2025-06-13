import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}= useAuth()

  return  user ? children : <Navigate to ="/login" replace/>
}

export default PrivateRoute;
