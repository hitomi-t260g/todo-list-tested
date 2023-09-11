// import { useState } from 'react';
import { useRef, useState } from 'react';
import { todos } from '../../mock/todos';
import NewTaskForm from '../NewTaskForm';
import ShowList from '../ShowList/index';
import styles from './index.module.css';

const TodoList = (): JSX.Element => {
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
  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <ShowList todos={todos} />
      <button onClick={onClickAccordionToggle}>{showContents ? '-' : '+'} </button>

      <div
        style={{
          height: showContents ? `${contentHeight}px` : '0px',
          opacity: showContents ? 1 : 0,
        }}
        className={styles.innerContents}>
        <div ref={childElement} className={showContents ? 'isOpen' : 'isClose'}>
          <NewTaskForm />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
