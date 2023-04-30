'use client';
import Authenticate from '@/components/api/Authenticate';
import { IRootLayout, IRootLayoutArgs } from '@/types';

const RootLayout: IRootLayout = ({ children }: IRootLayoutArgs) => {
  return children;
};

/*
    Route: /login
    isRouteSecured? FALSE
*/
export default Authenticate(RootLayout, { isRouteSecured: false });
