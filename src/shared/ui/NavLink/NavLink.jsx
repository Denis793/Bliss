import clsx from 'clsx';
import styles from './NavLink.module.scss';

export const NavLink = ({ children, href, isActive, className, onClick, ...props }) => {
  const linkClasses = clsx(styles.navLink, className, {
    [styles.active]: isActive,
  });

  return (
    <a href={href} className={linkClasses} onClick={onClick} {...props}>
      {children}
    </a>
  );
};
