import { todos } from '../../mock/todos';
import ShowList from '../ShowList/index';
import styles from './index.module.css';

const TodoList = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <ShowList todos={todos}/>
      <button>+</button>
    </div>
  );
};

export default TodoList;
