import { useState } from 'react';
import styles from './About.module.scss';
import aboutImgSrc from '@assets/img/about/about-img.svg';

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionData = [
    {
      question: 'Which Service We Provide?',
      answer:
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
    },
    {
      question: 'What I need to start design?',
      answer:
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
    },
    {
      question: 'What is our design process?',
      answer:
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
    },
  ];

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
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
                  <button
                    className={`${styles.faqButton} ${activeAccordion === index ? styles.active : ''}`}
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                  >
                    {item.question}
                  </button>
                  <div className={`${styles.faqContent} ${activeAccordion === index ? styles.show : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="main-btn btn-hover">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
