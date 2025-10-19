import { useState } from 'react';
import { accordionData } from '@/shared/data/accordionData';
import { Button } from '@/shared/ui/Button';
import clsx from 'clsx';
import aboutImgSrc from '@/assets/img/about/about-img.svg';
import plusIcon from '@/assets/img/about/plus.png';
import styles from './About.module.scss';

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutLayout}>
          <div className={styles.aboutImageWrapper}>
            <img src={aboutImgSrc} alt="About" className={styles.aboutImage} />
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.sectionTitle}>
              <h1>Read more about our Digital Agency</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
              </p>
            </div>
            <div className={styles.accordion}>
              {accordionData.map((item, index) => {
                const isActive = activeAccordion === index;
                return (
                  <div key={index} className={styles.faqContainer}>
                    <button
                      className={clsx(styles.faqButton, { [styles.active]: isActive })}
                      type="button"
                      onClick={() => handleAccordionClick(index)}
                    >
                      <span className={styles.faqButtonText}>{item.question}</span>
                      <div className={styles.faqIcon}>
                        <img src={plusIcon} alt="+" />
                      </div>
                    </button>
                    <div className={clsx(styles.faqContent, { [styles.show]: isActive })}>
                      <p className={clsx('description', styles.faqContentText, { [styles.show]: isActive })}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button href="#" onClick={(e) => e.preventDefault()} variant="primary">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
