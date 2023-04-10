import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { ReactElement, useEffect } from 'react';
import ThemeProvider from '@/providers/ThemeProvider';
import RootLayout from '@/components/layouts/RootLayout';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/store';
import NextNProgress from 'nextjs-progressbar';
import ErrorBoundary from '@/components/ErrorBoundary';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => useGlobalState.getState().toggleMenu(false);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <RootLayout>
        <NextNProgress options={{ easing: 'ease', speed: 500 }} />
        <ErrorBoundary>
          <GoogleAnalytics
            trackPageViews
            strategy="lazyOnload"
          />
          <Component {...pageProps} />
        </ErrorBoundary>
      </RootLayout>
    </ThemeProvider>
  );
}
