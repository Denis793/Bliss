import { useState } from 'react';
import clsx from 'clsx';
import { accordionData } from '@/shared/data/accordionData';
import { Button } from '@/shared/ui/Button';
import { AccordionButton } from '@/shared/ui/AccordionButton';
import aboutImgSrc from '@/assets/img/about/about-img.svg';
import styles from './About.module.scss';

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

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
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore
                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
              </p>
            </div>
            <div className={styles.accordion}>
              {accordionData.map((item, index) => (
                <div key={index} className={styles.singleFaq}>
                  <AccordionButton
                    item={item}
                    index={index}
                    activeAccordion={activeAccordion}
                    setActiveAccordion={setActiveAccordion}
                  />
                  <div className={clsx(styles.faqContent, { [styles.show]: activeAccordion === index })}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
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
