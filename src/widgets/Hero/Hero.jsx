import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import heroImgSrc from '@/assets/img/hero/hero-img.svg';
import styles from './Hero.module.scss';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection} id="home">
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroContent}>
            <h3 className={clsx(styles.welcomeText, isVisible && 'fadeInLeft')}>Welcome To Bliss</h3>
            <h1 className={clsx(styles.heroTitle, isVisible && 'fadeInUp')}>
              You are using free lite version of Bliss.
            </h1>
            <p className={clsx(isVisible && 'fadeInUp')}>
              Please, purchase full version of the template to get all sections, elements and permission to remove
              footer credits.
            </p>
            <Button
              className={clsx(styles.heroBtn, isVisible && 'fadeInUp')}
              onClick={(e) => e.preventDefault()}
              variant="primary"
              href="#"
            >
              Buy Now
            </Button>
          </div>

          <div className={clsx(styles.heroImageContent, isVisible && 'fadeInUp')}>
            <img className={styles.heroImage} src={heroImgSrc} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
