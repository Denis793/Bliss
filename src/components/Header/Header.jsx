import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logoSrc from '@assets/img/logo/logo.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);

      const sections = ['home', 'about', 'service'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`${styles.headerWrapper} ${isSticky ? styles.headerSticky : ''}`}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNavigation}>
          <a href="#" className={styles.headerLogo}>
            <img src={logoSrc} alt="Logo" className={styles.headerLogoImage} />
          </a>

          <button
            className={`${styles.headerToggle} ${isMenuOpen ? styles.headerToggleActive : ''}`}
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation"
          >
            <span className={styles.headerToggleLine}></span>
            <span className={styles.headerToggleLine}></span>
            <span className={styles.headerToggleLine}></span>
          </button>

          <div className={`${styles.headerMenu} ${isMenuOpen ? styles.headerMenuOpen : ''}`}>
            <ul className={styles.headerMenuList}>
              {menuItems.map((item) => (
                <li key={item.id} className={styles.headerMenuItem}>
                  <a
                    href={`#${item.id}`}
                    className={`${styles.headerMenuLink} ${
                      activeSection === item.id ? styles.headerMenuLinkActive : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
