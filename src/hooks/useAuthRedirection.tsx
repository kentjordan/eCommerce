'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IAuthRedirectionConfig, IUseAuthRedirection } from './types';

const useAuthRedirection: IUseAuthRedirection = ({
  isRouteSecured = false,
  isAuthenticated,
  redirectDelay = 500,
  redirectTo,
}: IAuthRedirectionConfig): void => {
  const currentPath = usePathname();
  const router = useRouter();

  // Used for first traversed route to check if the user is authenticated
  // The vaariable `isAuthenticated` is from Redux Store
  useEffect(() => {
    if (isRouteSecured && !isAuthenticated) {
      setTimeout(() => router.push(redirectTo), redirectDelay);
    } else {
      if (isAuthenticated) {
        router.push('/account');
      }
    }
  }, [isAuthenticated]);

  return;
};

export default useAuthRedirection;
