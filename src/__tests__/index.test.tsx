import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Index from '../pages/index';

afterEach(cleanup);

describe('Index', () => {
  it('containt the text', () => {
    const { queryByText } = render(<Index />);
    expect(queryByText('Create with Platform Devportal')).toBeTruthy();
  });
});
