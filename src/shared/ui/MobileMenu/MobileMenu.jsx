import { useEffect } from 'react';
import clsx from 'clsx';
import { NavLink } from '@/shared/ui/NavLink';
import styles from './MobileMenu.module.scss';

export const MobileMenu = ({ isMenuOpen, toggleMenu, closeMenu, menuItems }) => {
  // Заборона скролу body при відкритому меню
  useEffect(() => {
    if (isMenuOpen) {
      // Заборонити скрол
      document.body.style.overflow = 'hidden';
    } else {
      // Відновити скрол
      document.body.style.overflow = 'unset';
    }

    // Cleanup при демонтуванні компонента
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Закриття меню при натисканні Escape
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

      {/* Overlay для закриття меню при кліку поза ним */}
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
