// Calculator.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders the calculator', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('updates display when a number button is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('performs an operation when an operation button is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    fireEvent.click(screen.getByRole('button', { name: /\+/i }));
    fireEvent.click(screen.getByRole('button', { name: /2/i }));
    fireEvent.click(screen.getByRole('button', { name: /=/i }));
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('clears the display when the AC button is clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    fireEvent.click(screen.getByRole('button', { name: /AC/i }));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
