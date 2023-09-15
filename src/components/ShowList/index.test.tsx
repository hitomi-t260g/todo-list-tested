import { screen, render } from '@testing-library/react';
import { ShowList } from './index';
import { todos } from '../../mock/todos';

// test('local storageにtodoが何も登録されていない場合リストが表示されない', () => {
//   render(<ShowList />);

//   // モックが必要
//   const list = screen.getByRole('listitem');
//   expect(list).not.toBeInTheDocument();
// });

test('local storageにtodoが登録されている場合リストが表示され、チェックボックスにチェックがついていない', () => {
  render(<ShowList todos={todos} />);

  const list = screen.getAllByRole('listitem');
  list.forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  const checkbox = screen.getAllByRole('checkbox');
  checkbox.forEach((element) => {
    expect(element).not.toBeChecked();
  });
});
