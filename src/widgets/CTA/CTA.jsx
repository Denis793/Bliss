import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
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
    <>
      <section ref={sectionRef} className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaLayout}>
            <div className={styles.sectionTitle}>
              <h2 className={clsx({ [styles.fadeInUp]: isVisible })}>
                Have any project in you mind? <br />
                You can hire
              </h2>
              <p className={clsx({ [styles.fadeInUp]: isVisible })}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </p>
            </div>

            <Button href="#" onClick={(e) => e.preventDefault()} variant="primary">
              LET'S START YOUR PROJECT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
