import { useState, useEffect } from 'react';
import styles from './Preloader.module.scss';

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={styles.preloader}>
        <div className={styles.loader}>
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
    </>
  );
};
