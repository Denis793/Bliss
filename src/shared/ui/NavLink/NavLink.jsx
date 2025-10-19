import clsx from 'clsx';
import styles from './NavLink.module.scss';

export const NavLink = ({ children, href, isActive, className, onClick, variant, ...props }) => {
  const linkClasses = clsx(styles.navLink, variant === 'mobile' && styles.mobile, className, {
    [styles.active]: isActive,
  });

  return (
    <a href={href} className={linkClasses} onClick={onClick} {...props}>
      {children}
    </a>
  );
};
