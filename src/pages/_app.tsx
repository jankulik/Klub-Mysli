import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Global from '../styles/Global';
import { RouterTransition } from '../components/RouterTransition';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          cursorType: 'pointer',
          activeStyles: { transform: 'scale(0.98)' },
          colors: {
            brand: ['#D2DAD1', '#A8BFA4', '#018032', '#56B047', '#82BA41', '#f0f5eb', '#3A4638', '#30362F', '#272A27', '#20211F'],            
          },
          primaryColor: 'brand',
        }}
      >
        <Global />
        <RouterTransition />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}