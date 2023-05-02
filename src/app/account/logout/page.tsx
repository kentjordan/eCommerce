'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { storeUser } from '@/redux/slices/User.slice';
import { useRouter } from 'next/navigation';

const LagoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(storeUser({ isAuthenticated: false, user: undefined }));
  });

  return <div>LagoutPage</div>;
};

export default LagoutPage;
