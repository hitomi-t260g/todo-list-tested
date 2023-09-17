import { useState, type FormEventHandler, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        id: uuidv4(),
        title: newTaskTitle,
        description,
        status: '0',
      };
      setTodos([...todos, newTodos]);
      setNewTaskTitle('');
      setDescription('');
      setValid(false);
    },
    [newTaskTitle, description],
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
