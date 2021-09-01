import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerContextProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';


if (process.env.NODE_ENV !== 'production') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerContextProvider>
        <QueryClientProvider client={queryClient }>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  );
}

export default MyApp
