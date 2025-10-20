import logoSrc from '@/assets/img/logo/logo.svg';
import styles from './Logo.module.scss';

export const Logo = ({ href, className, ...props }) => {
  return (
    <a className={styles.logo} href={href} {...props}>
      <img className={styles.logoImage} src={logoSrc} alt="Logo" />
    </a>
  );
};
