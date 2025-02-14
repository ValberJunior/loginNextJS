import React from 'react';
import { render, screen } from '@testing-library/react';
import Homescreen from './Homescreen';

// Test suite for Homescreen component
describe('Homescreen Component', () => {
  it('should render without crashing', () => {
    render(<Homescreen />);
    expect(screen.getByText('Welcome to the Home Screen')).toBeInTheDocument();
  });

  it('should handle props correctly', () => {
    const { rerender } = render(<Homescreen title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();

    rerender(<Homescreen title="Updated Title" />);
    expect(screen.getByText('Updated Title')).toBeInTheDocument();
  });

  it('should handle empty state gracefully', () => {
    render(<Homescreen items={[]} />);
    expect(screen.getByText('No items available')).toBeInTheDocument();
  });
});