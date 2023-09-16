import { useRef, useState, type FormEventHandler } from 'react';
// import { todos } from '../../mock/todos';
import { NewTaskForm } from '../NewTaskForm';
import { ShowList } from '../ShowList/index';
import styles from './index.module.css';
import { type Todos } from '../../types/Todos';

export const TodoList = (): JSX.Element => {
  // newTask input
  const [todos, setTodos] = useState<Todos[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newTaskTitleError, setNewTaskTitleError] = useState('');
  const [valid, setValid] = useState(false);

  const onChangeTaskTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (newTaskTitle === null) {
      setValid(false);
    } else if (newTaskTitle.length >= 30) {
      setValid(false);
      setNewTaskTitleError('タイトルにしては長すぎます。短くしてください');
    } else {
      setValid(true);
    }
    setNewTaskTitle(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTaskTitle === '') {
      return;
    }
    const newTodos: Todos = {
      id: todos.length + 1,
      title: newTaskTitle,
      description,
      status: '1',
    };
    setTodos([...todos, newTodos]);
    setNewTaskTitle('');
    setDescription('');
  };

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
