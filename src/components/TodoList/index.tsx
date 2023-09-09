import ShowList from '../ShowList/index';
import styles from './index.module.css';

const TodoList = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <ShowList />
      <button>+</button>
    </div>
  );
};

export default TodoList;
