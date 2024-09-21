import React from 'react'

import { useSelector } from 'react-redux';    // refer to redux store
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;  //if allready in redux store redirect to signin
}
