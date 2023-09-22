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
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const ShowList: FC<Props> = memo(function showList(props) {
  const { todos, onClickDelete, setTodos } = props;

  const setSelectStatus = (id: string, value: string): void => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: value as '0' | '1' | '2' };
        }
        return todo;
      });
      return newTodos;
    });
  };
  return (
    <>
      <div className={styles.wrapper}>
        <ul>
          {todos.map((todo, id) => {
            return (
              <li className={styles['list-row']} key={id}>
                <div className={styles['list-parts']}>
                  {todo.status === '2' ? (
                    <label className={styles['list-title-completed']}>{todo.title}</label>
                  ) : (
                    <label className={styles['list-title']}>{todo.title}</label>
                  )}

                  <p className={styles['list-status']}>
                    <PulldownStatus
                      status={todo.status}
                      onChange={(e) => {
                        setSelectStatus(todo.id, e.target.value);
                      }}
                    />
                  </p>

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

// memo化するとprop-typeのeslintに引っかかるため、すべてのpropsに再度型指定する
ShowList.propTypes = {
  todos: PropTypes.array.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
};
