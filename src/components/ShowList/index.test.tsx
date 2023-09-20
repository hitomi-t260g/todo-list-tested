import { screen, render } from '@testing-library/react';
import { vi } from 'vitest';
import { ShowList } from './index';
import { todos } from '../../mock/todos';

test('todoが何も登録されていない場合リストが表示されない', () => {
  render(<ShowList todos={[]} onClickDelete={vi.fn} />);

  const list = screen.queryByRole('listitem');
  expect(list).not.toBeInTheDocument();
});

test('todoが登録されている場合、それぞれのstatusでリストが表示される', () => {
  render(<ShowList todos={todos} onClickDelete={vi.fn()} />);

  const list = screen.getAllByRole('listitem');
  list.forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  const select = screen.getAllByRole('combobox');
  expect(select[0]).toHaveTextContent('not yet');
  expect(select[1]).toHaveTextContent('in progress');
  expect(select[2]).toHaveTextContent('completed');
});
