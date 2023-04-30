'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { storeUser } from '@/redux/slices/User.slice';
import { IAuthRedirection, IDependencies, IUseAuthrRedirection } from './types';

const useAuthRedirection: IUseAuthrRedirection = (
  { isAuthenticated, redirectTo, response, isRouteSecured = false, redirectDelay = 500 }: IAuthRedirection,
  dependencies: IDependencies
) => {
  const currentPath = window.location.pathname;

  const dispatch = useDispatch();

  const router = useRouter();

  // Used for first traversed route to check if the user is authenticated
  // The vaariable `isAuthenticated` is from Redux Store
  useEffect(() => {
    if (isRouteSecured) {
      if (isAuthenticated) {
        router.push(currentPath);
        return;
      }
      setTimeout(() => router.push(redirectTo), redirectDelay);
    } else {
      if (isAuthenticated) {
        router.push(redirectTo);
        return;
      }
      // setTimeout(() => {
      //   router.push(currentPath);
      // }, redirectDelay);
    }
  }, []);

  // Used for server-response which re-render sa page
  // This is when the user mutate the server's database (or do some POST, PATCH, DELETE request)
  // The variable `dependencies` is the response from the server
  if (dependencies !== undefined && dependencies?.length > 0) {
    useEffect(() => {
      if (response?.isAuthenticated) {
        dispatch(storeUser(response));
        router.push('/account');
      }
    }, [...dependencies]);
  }
  return;
};

export default useAuthRedirection;
