import clsx from 'clsx';
import { services } from '@/shared/data/servicesData';
import { useIntersectionAnimation } from '@/shared/hooks/useIntersectionAnimation';
import styles from './Services.module.scss';

export const Services = () => {
  const { isVisible, sectionRef } = useIntersectionAnimation();

  return (
    <section ref={sectionRef} id="service" className={styles.serviceSection}>
      <div className="container">
        <div className={styles.serviceTitleWrapper}>
          <div className={styles.serviceTitleContent}>
            <div className={styles.sectionTitle}>
              <h2 className={clsx({ fadeInUp: isVisible })}>Our services</h2>
              <p className={clsx({ fadeInUp: isVisible })}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div className={clsx(styles.singleService, { fadeInUp: isVisible })} key={index}>
              <div className={`${styles.serviceIcon} ${styles[service.colorClass]}`}>{service.icon}</div>
              <div className={styles.serviceContent}>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
