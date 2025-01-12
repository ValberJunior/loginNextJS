import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homescreen from '../screens/homescreen/Homescreen';

// Test to ensure the Homescreen component renders correctly
it('renders the Homescreen component', () => {
  const { getByText } = render(<Homescreen />);
  expect(getByText('Welcome to the Home Screen')).toBeInTheDocument();
});

// Test user interaction with a button
it('handles button click correctly', () => {
  const { getByText } = render(<Homescreen />);
  const button = getByText('Click Me');
  fireEvent.click(button);
  expect(getByText('Button Clicked')).toBeInTheDocument();
});

// Test for responsive design
it('adjusts layout for mobile screens', () => {
  global.innerWidth = 320;
  const { container } = render(<Homescreen />);
  expect(container.firstChild).toHaveStyle('flex-direction: column');
});
