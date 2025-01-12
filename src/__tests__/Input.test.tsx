import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from '../components/Input';

describe('Input Component', () => {
  it('should handle invalid input gracefully', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    const input = getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'invalid input' } });
    expect(input.value).toBe('invalid input');
  });
});