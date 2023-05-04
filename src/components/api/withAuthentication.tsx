import UnauthorizedPage from '@/components/Unauthorized.page';
import { IUserReducerState } from '@/app/account/types';
import { IStoreState } from '@/redux/Store';
import { IRootLayoutArgs } from '@/types';
import { useSelector } from 'react-redux';
import { IWithAuthentication } from '../types';
import { FunctionComponent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuthentication: IWithAuthentication = (
  RootComponent: FunctionComponent<IRootLayoutArgs>,
  { isRouteSecured }
) => {
  return (({ children }) => {
    const router = useRouter();

    const { isAuthenticated } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

    useEffect(() => {
      if (isRouteSecured && !isAuthenticated) {
        router.push('/login');
      } else {
        if (!isAuthenticated) {
          router.push('/login');
        }
      }
    }, [isAuthenticated]);

    if (isRouteSecured && isAuthenticated) return <RootComponent>{children}</RootComponent>;

    if (!isRouteSecured) return <RootComponent>{children}</RootComponent>;

    return <UnauthorizedPage />;
  }) as FunctionComponent<IRootLayoutArgs>;
};

export default withAuthentication;
