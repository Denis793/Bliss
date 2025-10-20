import clsx from 'clsx';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { accordionData } from '@/shared/data/accordionData';
import { useIntersectionAnimation } from '@/shared/hooks/useIntersectionAnimation';
import aboutImgSrc from '@/assets/img/about/about-img.svg';
import plusIcon from '@/assets/img/about/plus.png';
import styles from './About.module.scss';

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const { isVisible, sectionRef } = useIntersectionAnimation();

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className={styles.aboutSection} ref={sectionRef} id="about">
      <div className="container">
        <div className={styles.aboutLayout}>
          <div className={clsx(styles.aboutImageWrapper, { fadeInLeft: isVisible })}>
            <img className={styles.aboutImage} src={aboutImgSrc} alt="About" />
          </div>

          <div className={styles.aboutContent}>
            <div className={styles.sectionTitle}>
              <h2 className={clsx({ fadeInUp: isVisible })}>Read more about our Digital Agency</h2>

              <p className={clsx('description', { fadeInUp: isVisible })}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
              </p>
            </div>

            <div className={styles.accordion}>
              {accordionData.map((item, index) => {
                const isActive = activeAccordion === index;
                return (
                  <div className={clsx(styles.faqContainer, { fadeInUp: isVisible })} key={index}>
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

            <Button
              className={clsx({ fadeInUp: isVisible })}
              href="#"
              onClick={(e) => e.preventDefault()}
              variant="primary"
            >
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
