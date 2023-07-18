// Calculator.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders the calculator', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('updates display when a number button is clicked', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    const display = container.querySelector('.result');
    expect(display.textContent).toBe('1');
  });

  it('performs an operation when an operation button is clicked', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    const plusOperationButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusOperationButton);
    fireEvent.click(screen.getByRole('button', { name: /2/i }));
    fireEvent.click(screen.getByRole('button', { name: /=/i }));
    const display = container.querySelector('.result');
    expect(display.textContent).toBe('3');
  });

  it('clears the display when the AC button is clicked', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /1/i }));
    fireEvent.click(screen.getByRole('button', { name: /AC/i }));
    const display = container.querySelector('.result');
    expect(display.textContent).toBe('0');
  });
});
