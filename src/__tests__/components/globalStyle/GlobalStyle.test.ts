import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import GlobalStyle from '../../components/globalStyle/GlobalStyle';

test('renders global styles correctly', () => {
  const { container } = render(<ThemeProvider theme={theme}><GlobalStyle /><div>Test</div></ThemeProvider>);
  expect(container.firstChild).toMatchSnapshot();
});