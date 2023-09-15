import { type FC, useState } from 'react';
import styles from './index.module.css';

interface Props {
  todoStatus?: string;
}

export const PulldownStatus: FC<Props> = (props) => {
  const { todoStatus = '1' } = props;
  const statuses = [
    { value: '1', label: 'not yet' },
    { value: '2', label: 'in progress' },
    { value: '3', label: 'completed' },
  ] as const;
  const [selected, setSelected] = useState(todoStatus);
  return (
    <>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        className={styles.select}>
        {statuses.map((v, i) => (
          <option key={i} value={v.value}>
            {v.label}
          </option>
        ))}
      </select>
    </>
  );
};
