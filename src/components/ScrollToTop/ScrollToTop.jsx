import { useState, useEffect } from 'react';
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
    <>
      <a
        href="#"
        className={`${styles.scrollTop} ${isVisible ? styles.visible : ''}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
};
