import React from 'react';
import { render, screen } from '@testing-library/react';
import Homescreen from '../screens/homescreen/Homescreen';

describe('Homescreen Component', () => {
  it('should render without crashing', () => {
    render(<Homescreen />);
    expect(screen.getByText(/Welcome to the Home Screen/i)).toBeInTheDocument();
  });
});