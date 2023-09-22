import { type Variants, motion } from 'framer-motion';
import { type FC, useState } from 'react';
import styles from './index.module.css';

interface Props {
  children: React.ReactElement;
}

export const Accordion: FC<Props> = (props) => {
  const { children } = props;
  // framer-motionによる表示処理
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const show = {
    opacity: 1,
    display: 'block',
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  };

  const hide = {
    opacity: 0,
    clipPath: 'inset(0 0 100% 0);',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  };

  return (
    <div className={styles.control}>
      <div className={styles.stick}>
        <motion.button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          whileTap={{ scale: 0.95 }}
          className={styles['add-task-button']}>
          {isVisible ? '-' : '+'}
          <span>add task</span>
        </motion.button>
        <motion.div
          className={styles.box}
          animate={isVisible ? show : hide}
          variants={itemVariants}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};
