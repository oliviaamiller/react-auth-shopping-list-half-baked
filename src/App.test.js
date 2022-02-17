import { render, screen } from '@testing-library/react';
import ListItemForm from './ListItemForm';

test('renders Quantity link', () => {
  render(<ListItemForm />);
  const linkElement = screen.getByText(/Quantity/i);
  expect(linkElement).toBeInTheDocument();
});
