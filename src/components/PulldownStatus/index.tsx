import { type FC } from 'react';
import styles from './index.module.css';

interface Props {
  status?: string;
}

export const PulldownStatus: FC<Props> = (props) => {
  const { status } = props;
  const statuses = [
    { value: '1', label: 'not yet' },
    { value: '2', label: 'in progress' },
    { value: '3', label: 'completed' },
  ] as const;

  return (
    <>
      <select
        defaultValue={status}
        className={styles.select}
        // onChange={(e) => {
        //   setStatus(e.target.value);
        // }}
      >
        {statuses.map((v, i) => (
          <option key={i} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </>
  );
};
