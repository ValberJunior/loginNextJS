import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Reset } from 'styled-reset';
import { GlobalStyle } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Reset/>
        <GlobalStyle/>
            <Component {...pageProps} />
      </ThemeProvider>
  )
}
