import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';


if (process.env.NODE_ENV !== 'production') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerContextProvider>
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
