import { type FC } from 'react';
import styles from './index.module.css';

interface Props {
  status?: string;
  // setSelectStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const PulldownStatus: FC<Props> = (props) => {
  const { status = '1' } = props;
  const statuses = [
    { value: '0', label: 'not yet' },
    { value: '1', label: 'in progress' },
    { value: '2', label: 'completed' },
  ] as const;

  return (
    <>
      <select
        defaultValue={status}
        className={styles.select}
        // onChange={setSelectStatus}
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
