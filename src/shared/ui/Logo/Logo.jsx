import logoSrc from '@/assets/img/logo/logo.svg';
import styles from './Logo.module.scss';

export const Logo = ({ href, className, ...props }) => {
  return (
    <a href={href} className={styles.logo} {...props}>
      <img src={logoSrc} alt="Logo" className={styles.logoImage} />
    </a>
  );
};
