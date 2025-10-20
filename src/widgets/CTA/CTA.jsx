import clsx from 'clsx';
import { Button } from '@/shared/ui/Button';
import { useIntersectionAnimation } from '@/shared/hooks/useIntersectionAnimation';
import styles from './CTA.module.scss';

export const CTA = () => {
  const { isVisible, sectionRef } = useIntersectionAnimation();

  return (
    <>
      <section ref={sectionRef} className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaLayout}>
            <div className={styles.sectionTitle}>
              <h2 className={clsx({ fadeInUp: isVisible })}>
                Have any project in you mind? <br />
                You can hire
              </h2>
              <p className={clsx({ fadeInUp: isVisible })}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </p>
            </div>

            <Button
              className={clsx({ fadeInUp: isVisible })}
              href="#"
              onClick={(e) => e.preventDefault()}
              variant="primary"
            >
              LET'S START YOUR PROJECT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
