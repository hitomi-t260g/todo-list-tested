import { type FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import { type Todos } from '../../types/Todos';

interface Props {
  todos: Todos[];
}

const ShowList: FC<Props> = (props) => {
  const { todos } = props;
  // const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles['delete-button']}>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <ul>
          {todos.map((todo, id) => {
            return (
              <li className={styles['list-row']} key={id}>
                <label className={styles['list-title']}>{todo.title}</label>
                <p className={styles['list-status']}>
                  {todo.status === 1 ? 'not yet' : todo.status === 2 ? 'in progress' : 'completed'}
                </p>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  // onChange={() => {
                  //   setChecked((state) => !state);
                  // }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ShowList;
