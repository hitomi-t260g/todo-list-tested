import { useState } from 'react';
import { NewTaskForm } from '../NewTaskForm';
import { ShowList } from '../ShowList/index';

import styles from './index.module.css';

import { useFormEventHandler } from '../../Hooks/useFormEventHandler';
import { Accordion } from '../Accordion';

export const TodoList = (): JSX.Element => {
  const [newTaskTitleError, setNewTaskTitleError] = useState('');

  // task titleのバリデーションと入力値の取得
  const onChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === '') {
      setValid(false);
    } else if (e.target.value.length > 30) {
      setValid(false);
      setNewTaskTitleError('タイトルにしては長すぎます。短くしてください');
    } else {
      setValid(true);
      setNewTaskTitleError('');
    }
    setNewTaskTitle(e.target.value);
  };

  // task descriptionの取得
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };

  // useForm EventHandlerを呼び出す
  const {
    todos,
    setTodos,
    valid,
    setValid,
    newTaskTitle,
    setNewTaskTitle,
    description,
    setDescription,
    handleSubmit,
  } = useFormEventHandler();

  // 削除ボタン押下時の処理
  const onClickDelete = (id: number): void => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <div className={styles.container}>
        <ShowList
          todos={todos}
          onClickDelete={(i) => {
            onClickDelete(i);
          }}
          setTodos={setTodos}
        />
        <Accordion>
          <NewTaskForm
            onChangeTaskTitle={onChangeTaskTitle}
            onChangeDescription={onChangeDescription}
            newTaskTitle={newTaskTitle}
            description={description}
            todos={todos}
            valid={valid}
            newTaskTitleError={newTaskTitleError}
            onSubmit={handleSubmit}
          />
        </Accordion>
      </div>
    </div>
  );
};
