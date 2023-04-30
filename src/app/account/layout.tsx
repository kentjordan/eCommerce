'use client';
import Authenticate from '@/components/api/Authenticate.hoc';
import { IRootLayout, IRootLayoutArgs } from '@/types';

const RootLayout: IRootLayout = ({ children }: IRootLayoutArgs) => {
  return children;
};

/*
    Route: /account/:path*
    isRouteSecured? TRUE
*/
export default Authenticate(RootLayout, { isRouteSecured: true });
