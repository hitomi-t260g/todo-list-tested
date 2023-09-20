// react-hook-formを利用しないパターン
import { memo, type FC, type FormEventHandler } from 'react';
import PropTypes from 'prop-types';
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

export const NewTaskForm: FC<Props> = memo(function newTaskForm(props) {
  const {
    newTaskTitle,
    description,
    valid = false,
    onChangeTaskTitle,
    newTaskTitleError,
    onChangeDescription,
    onSubmit,
  } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={onSubmit}>
          <label className={styles['form-label']}>
            <p>
              new task title<span className={styles['required-label']}>*required</span>
              {newTaskTitleError != null && (
                <span className={styles.error}>{newTaskTitleError}</span>
              )}
            </p>

            <input
              type="text"
              placeholder="input some task title"
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
              placeholder="input some description..."
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
});

NewTaskForm.propTypes = {
  newTaskTitle: PropTypes.string,
  description: PropTypes.string,
  valid: PropTypes.bool.isRequired,
  onChangeTaskTitle: PropTypes.func.isRequired,
  newTaskTitleError: PropTypes.string,
  onChangeDescription: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
