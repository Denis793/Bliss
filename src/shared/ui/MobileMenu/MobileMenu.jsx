import clsx from 'clsx';
import { useEffect } from 'react';
import { NavLink } from '@/shared/ui/NavLink';
import styles from './MobileMenu.module.scss';

export const MobileMenu = ({ isMenuOpen, toggleMenu, closeMenu, menuItems }) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen, closeMenu]);

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

      <div className={clsx(styles.overlay, isMenuOpen && styles.open)} onClick={closeMenu} aria-hidden="true" />

      <div className={clsx(styles.menuBar, isMenuOpen && styles.open)}>
        <ul className={styles.navbarNav}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <NavLink href={`#${item.id}`} isActive={item.isActive} onClick={closeMenu} variant="mobile">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
