import UnauthorizedPage from '@/app/account/pages/Unauthorized.page';
import { IUserReducerState } from '@/app/account/types';
import useAuthRedirection from '@/hooks/useAuthRedirection';
import { IStoreState } from '@/redux/Store';
import { IRootLayout } from '@/types';
import { useSelector } from 'react-redux';
import { IAuth } from '../types';

const Authenticate: IAuth = (RootComponent, { isRouteSecured }) => {
  return (({ children }) => {
    const { isAuthenticated } = useSelector((state: IStoreState) => state.UserReducer) as IUserReducerState;

    useAuthRedirection({
      isRouteSecured,
      isAuthenticated,
      redirectDelay: 2000,
      redirectTo: '/login',
    });

    if (isRouteSecured && isAuthenticated) return <RootComponent children={children} />;

    if (!isRouteSecured) return <RootComponent children={children} />;

    return <UnauthorizedPage />;
  }) as IRootLayout;
};

export default Authenticate;
