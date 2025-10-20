import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Preloader.module.scss';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  console.log('Preloader rendering:', { isVisible, isHiding });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const loadTimer = setTimeout(() => {
      setIsHiding(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 2000);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={clsx(styles.preloader, { [styles.hidden]: isHiding })}>
      <div className={styles.loader}>
        <h2>Loading...</h2>
        <div className={styles.spinner}>
          <div className={styles.spinnerContainer}>
            <div className={styles.spinnerRotator}>
              <div className={styles.spinnerLeft}>
                <div className={styles.spinnerCircle}></div>
              </div>
              <div className={styles.spinnerRight}>
                <div className={styles.spinnerCircle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
