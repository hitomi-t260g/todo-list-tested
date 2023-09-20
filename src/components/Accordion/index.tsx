import { motion, useAnimation } from 'framer-motion';
import { type FC, useState } from 'react';
import styles from './index.module.css';

interface Props {
  children: React.ReactElement;
}

export const Accordion: FC<Props> = (props) => {
  const { children } = props;
  // framer-motionによる表示処理
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    // transitionEnd: {
    //   display: 'none',
    // },
  };
  return (
    <div className={styles.control}>
      <div className={styles.stick}>
        <motion.button
          onClick={() => {
            setIsVisible(!isVisible);
            controls.start({ y: [0, 100, 50] }).catch((e) => {
              console.log(e);
            });
          }}
          whileTap={{ scale: 0.95 }}
          className={styles['add-task-button']}>
          {isVisible ? '-' : '+'}
          <span>add task</span>
        </motion.button>
        <motion.div
          className={styles.box}
          animate={isVisible ? show : hide}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          // onChange={checkTargetHeight}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
