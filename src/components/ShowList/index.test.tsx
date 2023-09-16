import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import { ShowList } from './index';
import { todos } from '../../mock/todos';

test('todoが何も登録されていない場合リストが表示されない', () => {
  render(<ShowList todos={[]} onClickDelete={vi.fn} />);

  const list = screen.getByRole('listitem');
  expect(list).not.toBeInTheDocument();
});

test('todoが登録されている場合リストが表示される', () => {
  render(<ShowList todos={todos} onClickDelete={vi.fn()} />);

  const list = screen.getAllByRole('listitem');
  list.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
