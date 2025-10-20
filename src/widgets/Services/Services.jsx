import styles from './Services.module.scss';

export const Services = () => {
  const services = [
    {
      icon: '◐',
      title: 'UI/UX Design',
      description: 'Professional user interface and user experience design for modern applications.',
      colorClass: 'iconColor1',
    },
    {
      icon: '⧉',
      title: 'Web Development',
      description: 'Responsive and modern web development using latest technologies.',
      colorClass: 'iconColor2',
    },
    {
      icon: '✦',
      title: 'Graphics Design',
      description: 'Creative graphic design solutions for all your branding needs.',
      colorClass: 'iconColor3',
    },
    {
      icon: '◈',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      colorClass: 'iconColor4',
    },
  ];

  return (
    <section id="service" className={styles.serviceSection}>
      <div className="container">
        <div className={styles.serviceTitleWrapper}>
          <div className={styles.serviceTitleContent}>
            <div className={styles.sectionTitle}>
              <h2>Our services</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labore.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.singleService}>
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
