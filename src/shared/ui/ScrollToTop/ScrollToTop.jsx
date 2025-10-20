import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';
import styles from './ScrollToTop.module.scss';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      className={clsx(styles.scrollTop, { [styles.visible]: isVisible })}
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll to top"
    >
      ^
    </Button>
  );
};
