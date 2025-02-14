// src/screens/homescreen/Homescreen.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Homescreen from './Homescreen';

describe('Homescreen Component', () => {
  it('renders the login form', () => {
    render(<Homescreen />);
    expect(screen.getByLabelText(/User/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('handles login button click', () => {
    render(<Homescreen />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);
    // Add assertions for expected behavior after click
  });
});