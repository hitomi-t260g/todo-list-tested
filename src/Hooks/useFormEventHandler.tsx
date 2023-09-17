import { useState, type FormEventHandler, useCallback } from 'react';
import { type Todos } from '../types/Todos';

interface Return {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  valid: boolean;
  setValid: React.Dispatch<React.SetStateAction<boolean>>;
  newTaskTitle: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export const useFormEventHandler = (): Return => {
  // newTask input
  const [todos, setTodos] = useState<Todos[]>([]); // グローバルなstateにする、というよりもstateで管理する必要ない気がしてしょうがない,
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [description, setDescription] = useState('');
  const [valid, setValid] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (newTaskTitle === '') {
        return;
      }
      const newTodos: Todos = {
        id: todos.length + 1, // FIX ME: uuidなど一意の値にしないとtodo削除によりidが重複する
        title: newTaskTitle,
        description,
        status: '1',
      };
      setTodos([...todos, newTodos]);
      setNewTaskTitle('');
      setDescription('');
      setValid(false);
    },
    [newTaskTitle],
  );

  return {
    todos,
    setTodos,
    valid,
    setValid,
    newTaskTitle,
    setNewTaskTitle,
    description,
    setDescription,
    handleSubmit,
  };
};
