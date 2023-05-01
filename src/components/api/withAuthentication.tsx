import UnauthorizedPage from '@/app/account/pages/Unauthorized.page';
import { IUserReducerState } from '@/app/account/types';
import useAuthRedirection from '@/hooks/useAuthRedirection';
import { IStoreState } from '@/redux/Store';
import { IRootLayout, IRootLayoutArgs } from '@/types';
import { useSelector } from 'react-redux';
import { IAuth } from '../types';

const withAuthentication: IAuth = (
  RootComponent: React.FunctionComponent<IRootLayoutArgs>,
  { isRouteSecured }
) => {
  return (({ children }) => {
    const { isAuthenticated } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

    useAuthRedirection({
      isRouteSecured,
      isAuthenticated,
      redirectDelay: 2000,
      redirectTo: '/login',
    });

    if (isRouteSecured && isAuthenticated) return <RootComponent>{children}</RootComponent>;

    if (!isRouteSecured) return <RootComponent>{children}</RootComponent>;

    return <UnauthorizedPage />;
  }) as React.FunctionComponent<IRootLayoutArgs>;
};

export default withAuthentication;
