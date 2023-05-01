'use client';
import withAuthentication from '@/components/api/withAuthentication';
import { IRootLayout, IRootLayoutArgs } from '@/types';

const RootLayout: IRootLayout = ({ children }: IRootLayoutArgs) => {
  return children;
};

/*
    Route: /login
    isRouteSecured? FALSE
*/
export default withAuthentication(RootLayout, { isRouteSecured: false });
