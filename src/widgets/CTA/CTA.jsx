import { useState, useEffect, useRef } from 'react';
import styles from './CTA.module.scss';

export const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaLayout}>
          <div className={styles.ctaContent}>
            <div className={styles.sectionTitle}>
              <h1 className={isVisible ? styles.fadeInUp : ''}>Have any project in you mind? You can hire</h1>
              <p className={isVisible ? styles.fadeInUp : ''}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </p>
            </div>
          </div>
          <div className={styles.ctaButtonWrapper}>
            <a href="#" onClick={(e) => e.preventDefault()} className={`main-btn btn-hover ${styles.ctaButton}`}>
              LET'S START YOUR PROJECT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
