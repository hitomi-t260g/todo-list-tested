import { screen, render } from '@testing-library/react';
import App from './App';

test('initial conditions', () => {
  render(<App />);

  // just title matches
  const title = screen.getByRole('heading');
  expect(title).toHaveTextContent('Todo List');

  // just check a button exist
  const createButton = screen.getByRole('button', { name: '+' });
  expect(createButton).toBeEnabled();
});
