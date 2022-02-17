import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logout link', () => {
  render(<App />);
  const linkElement = screen.getByText(/logout/i);
  expect(linkElement).toBeInTheDocument();
});
