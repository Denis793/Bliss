import { useState, useEffect, useRef } from 'react';
import { Button } from '@/shared/ui/Button';
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
      <div className="container">
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
            <Button href="#" onClick={(e) => e.preventDefault()} className={styles.ctaButton} variant="primary">
              LET'S START YOUR PROJECT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
