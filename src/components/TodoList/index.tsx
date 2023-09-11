// import { useState } from 'react';
import { todos } from '../../mock/todos';
import NewTaskForm from '../NewTaskForm';
import ShowList from '../ShowList/index';
import styles from './index.module.css';

const TodoList = (): JSX.Element => {
  // const [showContents, setShowContents] = useState(false);

  // const onClickShowContents = () => {};
  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <ShowList todos={todos} />
      <button>+</button>
      <NewTaskForm />
    </div>
  );
};

export default TodoList;
