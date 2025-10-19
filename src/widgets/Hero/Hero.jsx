import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Hero.module.scss';
import heroImgSrc from '@/assets/img/hero/hero-img.svg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <span className={clsx(styles.welcomeText, isVisible && styles.fadeInLeft)}>Welcome To Bliss</span>
            <h1 className={clsx(styles.heroTitle, isVisible && styles.fadeInUp)}>
              You are using free lite version of Bliss.
            </h1>
            <p className={clsx(styles.heroDescription, isVisible && styles.fadeInUp)}>
              Please, purchase full version of the template to get all sections, elements and permission to remove
              footer credits.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className={clsx('main-btn', 'btn-hover', styles.heroBtn, isVisible && styles.fadeInUp)}
            >
              Buy Now
            </a>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={clsx(styles.heroImageContent, isVisible && styles.fadeInUp)}>
              <img src={heroImgSrc} alt="Hero" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
