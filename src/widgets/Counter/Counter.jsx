import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import styles from './Counter.module.scss';
import counterImgSrc from '@/assets/img/counter-up/counter-up-img.svg';

export const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { icon: '♡', end: 3642, suffix: '', label: 'Happy client', colorClass: 'iconColor1' },
    { icon: '✓', end: 5436, suffix: '', label: 'Project done', colorClass: 'iconColor2' },
    { icon: '◉', end: 642, suffix: 'K', label: 'Live Design', colorClass: 'iconColor3' },
    { icon: '▲', end: 42, suffix: '', label: "Creative designer's", colorClass: 'iconColor4' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setStartCounting(true);
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
    <section ref={sectionRef} className={styles.counterUpSection}>
      <div className="container">
        <div className={styles.counterLayout}>
          <div className={styles.counterContent}>
            <div className={styles.sectionTitle}>
              <h2 className={isVisible ? styles.fadeInUp : ''}>Why we are the best, Why you hire?</h2>
              <p className={isVisible ? styles.fadeInUp : ''}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat.
              </p>
            </div>
            <div className={styles.counterWrapper}>
              {counters.map((counter, index) => (
                <div key={index} className={styles.singleCounter}>
                  <div className={`${styles.counterIcon} ${styles[counter.colorClass]}`}>{counter.icon}</div>
                  <div className={styles.counterContent}>
                    <h2>{startCounting ? <CountUp end={counter.end} duration={2} suffix={counter.suffix} /> : '0'}</h2>
                    <h4>{counter.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.counterImageWrapper}>
            <img src={counterImgSrc} alt="Counter" className={styles.counterImage} />
          </div>
        </div>
      </div>
    </section>
  );
};
