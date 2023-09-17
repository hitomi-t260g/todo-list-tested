import { memo, type FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { type Todos } from '../../types/Todos';
import { PulldownStatus } from '../PulldownStatus';

interface Props {
  todos: Todos[];
  onClickDelete: (index: number) => void;
}

export const ShowList: FC<Props> = memo(function showList(props) {
  const { todos, onClickDelete } = props;

  return (
    <>
      <div className={styles.wrapper}>
        {/* <div className={styles['delete-button']}>
          <button>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div> */}
        <ul>
          {todos.map((todo, id) => {
            return (
              <li className={styles['list-row']} key={id}>
                <div className={styles['list-parts']}>
                  {/* {todo.status === '3' ? (
                    <label className={styles['list-title-completed']}>{todo.title}</label>
                  ) : (
                    <label className={styles['list-title']}>{todo.title}</label>
                  )} */}
                  <label className={styles['list-title']}>{todo.title}</label>
                  <p className={styles['list-status']}>
                    <PulldownStatus status={todo.status} />
                  </p>
                  {/* <input
                  type="checkbox"
                  defaultChecked={false}
                /> */}
                  <button
                    className={styles['delete-button']}
                    onClick={() => {
                      onClickDelete(id);
                    }}>
                    <FontAwesomeIcon icon={faTrash} size="xs" className={styles['fa-trash-size']} />
                  </button>
                </div>
                <div className={styles['list-parts']}>
                  <p className={styles['list-description']}>{todo.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});

// memo化するとprop-typeのeslintに引っかかるため、すべてのpropsに再度型指定する(ちょっと不毛な気がする)
ShowList.propTypes = {
  todos: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
