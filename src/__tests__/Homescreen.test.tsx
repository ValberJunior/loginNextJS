// src/__tests__/Homescreen.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homescreen from '../screens/homescreen/Homescreen';

describe('Homescreen Component', () => {
  it('should render all elements correctly', () => {
    const { getByText, getByLabelText } = render(<Homescreen />);
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('User')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('should handle button click', () => {
    const { getByText } = render(<Homescreen />);
    const button = getByText('Login');
    fireEvent.click(button);
    // Add assertions for expected outcomes after click
  });
});