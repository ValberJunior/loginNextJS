import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../pages/index';

// Test to check if the component renders correctly
it('renders the index page correctly', () => {
  const { getByText } = render(<Index />);
  expect(getByText('Create with Platform Devportal')).toBeInTheDocument();
});

// Test to simulate a button click
it('handles button click correctly', () => {
  const { getByRole } = render(<Index />);
  const button = getByRole('button');
  fireEvent.click(button);
  expect(someFunction).toHaveBeenCalled(); // Replace with actual function
});

// Test for edge case handling
it('displays error message on invalid input', () => {
  const { getByLabelText, getByText } = render(<Index />);
  const input = getByLabelText('Username');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.blur(input);
  expect(getByText('Username is required')).toBeInTheDocument();
});