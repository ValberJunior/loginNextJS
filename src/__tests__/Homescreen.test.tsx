import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homescreen from '../screens/homescreen/Homescreen';

describe('Homescreen Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Homescreen />);
    expect(getByText('User')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
  });

  it('handles login button click', () => {
    const { getByText } = render(<Homescreen />);
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    // Add assertions to verify the expected behavior after clicking the login button
  });
});