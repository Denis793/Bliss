import styles from './ClientLogo.module.scss';
import lineiconsLogo from '@assets/img/client-logo/lineicons.svg';
import uideckLogo from '@assets/img/client-logo/uideck.svg';
import pagebulbLogo from '@assets/img/client-logo/pagebulb.svg';
import graygridsLogo from '@assets/img/client-logo/graygrids.svg';

export const ClientLogo = () => {
  const logos = [
    { src: lineiconsLogo, alt: 'LineIcons' },
    { src: uideckLogo, alt: 'UIdeck' },
    { src: pagebulbLogo, alt: 'PageBulb' },
    { src: graygridsLogo, alt: 'GrayGrids' },
  ];

  return (
    <>
      <section className={styles.clientLogoSection}>
        <div className={styles.container}>
          <div className={styles.row}>
            {logos.map((logo, index) => (
              <div key={index} className={styles.logoCol}>
                <div className={styles.singleLogo}>
                  <img src={logo.src} alt={logo.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
