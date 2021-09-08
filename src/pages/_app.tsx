import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { queryClient } from '../services/queryClient';
import { theme } from '../styles/theme';
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


if (process.env.NODE_ENV !== 'production') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerContextProvider>
        <QueryClientProvider client={queryClient }>
          <ReactQueryDevtools/>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
