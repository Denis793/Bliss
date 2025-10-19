import clsx from 'clsx';
import { NavLink } from '@/shared/ui/NavLink';
import styles from './MobileMenu.module.scss';

export const MobileMenu = ({ isMenuOpen, toggleMenu, closeMenu, menuItems }) => {
  return (
    <>
      <button
        className={clsx(styles.toggler, isMenuOpen && styles.open)}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className={styles.togglerIcon}></span>
        <span className={styles.togglerIcon}></span>
        <span className={styles.togglerIcon}></span>
      </button>

      <div className={clsx(styles.menuBar, isMenuOpen && styles.open)}>
        <ul className={styles.navbarNav}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <NavLink
                href={`#${item.id}`}
                isActive={item.isActive}
                onClick={closeMenu}
                className={styles.mobileNavLink}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
