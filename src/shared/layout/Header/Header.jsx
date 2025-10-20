import clsx from 'clsx';
import { useState } from 'react';
import { Logo } from '@/shared/ui/Logo';
import { NavLink } from '@/shared/ui/NavLink';
import { MobileMenu } from '@/shared/ui/MobileMenu';
import { menuItems } from '@/shared/data/headerMenuData';
import { useHeaderScroll } from '@/shared/hooks/useHeaderScroll';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrolled } = useHeaderScroll(80);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(sectionId);
    closeMenu();
  };

  const headerClasses = clsx(styles.header, scrolled && styles.headerScrolled);

  return (
    <>
      <header className={headerClasses}>
        <div className="container">
          <nav className={styles.navbar}>
            <Logo href="#home" />

            <MobileMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
              closeMenu={closeMenu}
              menuItems={menuItems.map((item) => ({
                ...item,
                isActive: activeSection === item.id,
              }))}
            />

            <div className={styles.menuBarDesktop}>
              <ul className={styles.navbarNavDesktop}>
                {menuItems.map((item) => (
                  <li className={styles.navItemDesktop} key={item.id}>
                    <NavLink
                      href={`#${item.id}`}
                      isActive={activeSection === item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
