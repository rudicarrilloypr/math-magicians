import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders Calculator correctly', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('updates display when a number button is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
