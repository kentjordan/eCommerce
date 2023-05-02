'use client';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';

import Store from '@/redux/Store';
import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from '@/components/Footer';

// import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="h-screen overflow-x-hidden">
        <QueryClientProvider client={queryClient}>
          <Provider store={Store}>
            {/* <PersistGate persistor={persistStore(Store)}> */}
            <Navbar />
            {children}
            {/* </PersistGate> */}
            <Footer />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'eCommerce',
  description: 'A generic eCommerce platform made by Kent John Jordan',
};
