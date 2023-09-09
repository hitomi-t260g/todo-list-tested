import { type FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

// interface Todos {
//   uuid: number;
//   title: string;
//   description: string;
//   status: number;
// }

const todo1 = {
  uuid: 1,
  title: 'todo 1',
  description: 'description1',
  status: 1,
};
const todo2 = {
  uuid: 2,
  title: 'todo 2',
  description: 'description2',
  status: 3,
};
const ShowList: FC = () => {
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
          <li className={styles['list-row']}>
            <label className={styles['list-title']}>{todo1.title}</label>
            <p className={styles['list-status']}>
              {todo1.status === 1 ? 'not yet' : todo1.status === 2 ? 'in progress' : 'completed'}
            </p>
            <input
              type="checkbox"
              defaultChecked={false}
              // onChange={() => {
              //   setChecked((state) => !state);
              // }}
            />
          </li>
          <li className={styles['list-row']}>
            <label className={styles['list-title']}>{todo2.title}</label>
            <p className={styles['list-status']}>
              {todo2.status === 1 ? 'not yet' : todo2.status === 2 ? 'in progress' : 'completed'}
            </p>
            <input type="checkbox" defaultChecked={false} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShowList;
