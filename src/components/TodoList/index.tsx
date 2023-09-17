import { useRef, useState } from 'react';
// import { todos } from '../../mock/todos';
import { NewTaskForm } from '../NewTaskForm';
import { ShowList } from '../ShowList/index';

import styles from './index.module.css';

import { useFormEventHandler } from '../../Hooks/useFormEventHandler';

export const TodoList = (): JSX.Element => {
  // newTask input

  const [newTaskTitleError, setNewTaskTitleError] = useState('');

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
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };
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

  // 簡易accordion ちょっと表現したいものが違うので後で修正
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  const onClickAccordionToggle = (): void => {
    if (childElement.current !== null) {
      const childHeight: number = childElement.current?.clientHeight; // 対象要素の高さの取得
      setContentHeight(childHeight);
      setShowContents(!showContents);
    }
  };
  const onClickDelete = (id: number): void => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.wrapper}>
      {console.log(todos)}

      <h1>Todo List</h1>
      <div className={styles.container}>
        <ShowList
          todos={todos}
          onClickDelete={(i) => {
            onClickDelete(i);
          }}
        />
        <button onClick={onClickAccordionToggle} className={styles['add-task-button']}>
          {showContents ? '-' : '+'}{' '}
        </button>

        <div
          style={{
            height: showContents ? `${contentHeight}px` : '0px',
            opacity: showContents ? 1 : 0,
          }}
          className={styles.innerContents}>
          <div ref={childElement} className={showContents ? 'isOpen' : 'isClose'}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
