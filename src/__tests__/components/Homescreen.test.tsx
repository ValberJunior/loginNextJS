import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Homescreen from '../screens/homescreen/Homescreen';

describe('Homescreen Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Homescreen />);
    expect(getByText('Welcome to the Home Screen')).toBeInTheDocument();
  });

  it('should handle button click', () => {
    const { getByText } = render(<Homescreen />);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(getByText('Button Clicked')).toBeInTheDocument();
  });
});