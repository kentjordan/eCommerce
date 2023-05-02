'use client';
import { IRootLayout, IRootLayoutArgs } from '@/types';
import withAuthentication from '@/components/api/withAuthentication';

const RootLayout: IRootLayout = ({ children }: IRootLayoutArgs) => {
  return children;
};

export default withAuthentication(RootLayout, { isRouteSecured: false });
