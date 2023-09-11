import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewTaskForm from './index';

test('form初期表示時、各フォームのplaceholderが表示され、submitボタンが非活性', () => {
  render(<NewTaskForm />);

  const newTaskTitle = screen.getByPlaceholderText('タイトルを記入してください');
  expect(newTaskTitle).toBeInTheDocument();

  const description = screen.getByPlaceholderText('タスク内容を記入してください');
  expect(description).toBeInTheDocument();

  const button = screen.getByRole('button', { name: 'submit' });
  expect(button).not.toBeEnabled();
});

test('タイトルに30文字を超えて入力するとsubmitボタンが非活性となる', async () => {
  const user = userEvent.setup();
  render(<NewTaskForm />);
  await user.type(
    screen.getByRole('textbox', { name: 'new task title *' }),
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほま',
  );
  const button = screen.getByRole('button', { name: 'submit' });
  await waitFor(() => {
    expect(button).not.toBeEnabled();
  });
});
