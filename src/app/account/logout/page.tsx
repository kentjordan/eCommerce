'use client';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { storeUser } from '@/redux/slices/User.slice';

const LagoutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeUser({ isAuthenticated: false, user: undefined }));
  });

  return <div>LagoutPage</div>;
};

export default LagoutPage;
