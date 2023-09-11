// react-hook-formを利用しないパターン
import { useState, type FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

const NewTaskForm: FC = () => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  // descriptionにvalidationをかけたくなったら使う
  // const [description, setDescription] = useState('');
  const [newTaskTitleError, setNewTaskTitleError] = useState('');
  const [valid, setValid] = useState(false);

  const handleValidate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (newTaskTitle === '') {
      setValid(false);
    } else if (newTaskTitle.length >= 30) {
      setValid(false);
      setNewTaskTitleError('タイトルにしては長すぎます。短くしてください');
    } else {
      setValid(true);
    }
    setNewTaskTitle(e.target.value);
  };
  // submit時に何かしたくなったら追加

  // const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  //   e.preventDefault();

  //   }
  // };
  return (
    <>
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faWindowClose} />
        <form>
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
              onChange={handleValidate}
            />
          </label>

          <label className={styles['form-label']}>
            <p>description</p>
            <textarea
              rows={5}
              cols={33}
              placeholder="タスク内容を記入してください"
              className={styles['form-textarea']}
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

export default NewTaskForm;
