// react-hook-formを利用しないパターン
import { type FC, type FormEventHandler } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import { type Todos } from '../../types/Todos';

interface Props {
  newTaskTitle: string | undefined;
  description: string | undefined;
  valid: boolean;
  onChangeTaskTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newTaskTitleError: string | null;
  onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  todos: Todos[];
}

export const NewTaskForm: FC<Props> = (props) => {
  const {
    newTaskTitle,
    description,
    valid = true,
    onChangeTaskTitle,
    newTaskTitleError,
    onChangeDescription,
    onSubmit,
  } = props;

  // const latestId = document.querySelectorAll('li').length;

  return (
    <>
      <div className={styles.wrapper}>
        {/* <div className={styles['close-button']}>
          <FontAwesomeIcon icon={faWindowClose} />
        </div> */}

        <form onSubmit={onSubmit}>
          <label className={styles['form-label']}>
            <p>
              new task title<span className={styles['required-label']}>*</span>
              {newTaskTitleError != null && (
                <span className={styles.error}>{newTaskTitleError}</span>
              )}
            </p>

            <input
              type="text"
              placeholder="タイトルを記入してください"
              className={styles['form-input']}
              onChange={onChangeTaskTitle}
              value={newTaskTitle}
            />
          </label>

          <label className={styles['form-label']}>
            <p>description</p>
            <textarea
              rows={5}
              cols={33}
              placeholder="タスク内容を記入してください"
              className={styles['form-textarea']}
              onChange={onChangeDescription}
              value={description}
            />
          </label>
          <button type="submit" className={styles['form-submit']} disabled={!valid}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};
