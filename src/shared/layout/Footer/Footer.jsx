import clsx from 'clsx';
import React, { useState } from 'react';
import { useIntersectionAnimation } from '@/shared/hooks/useIntersectionAnimation';
import logoSrc from '@/assets/img/logo/logo.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  const [mapError, setMapError] = useState(false);
  const { isVisible, sectionRef } = useIntersectionAnimation();

  const mapConfig = {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8634566488033!2d30.516727315708!3d50.450001979474934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce55c6533bb1%3A0xd4e6e2b5b0c3d0d1!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1000000000000!5m2!1sen!2sus',
    directUrl: 'https://maps.google.com/?q=Kyiv,Ukraine',
    locationName: 'Kyiv, Ukraine',
  };

  const socialLinks = [
    { icon: 'lni lni-facebook-filled', href: '#' },
    { icon: 'lni lni-twitter-filled', href: '#' },
    { icon: 'lni lni-instagram-filled', href: '#' },
    { icon: 'lni lni-linkedin-original', href: '#' },
  ];

  const navigationLinks = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Team', 'Contact'];
  const serviceLinks = [
    'Graphic design',
    'Web design',
    'Visual design',
    'Product design',
    'UI/UX design',
    'Web development',
    'Startup business',
  ];

  return (
    <>
      <footer className={styles.footer} ref={sectionRef}>
        <div className="container">
          <div className={styles.widgetWrapper}>
            <div className={clsx(styles.footerWidget, styles.logoWidget, { fadeInUp: isVisible })}>
              <div className={styles.logo}>
                <a href="index.html">
                  <img src={logoSrc} alt="Logo" />
                </a>
              </div>
              <p className="description">
                We are expert designer team, There have a lot of designer and developer If you have any project you can
                hire Create a website.
              </p>
              <ul className={styles.socials}>
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a href={social.href} onClick={(e) => e.preventDefault()}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={clsx(styles.footerWidget, styles.linkWidget, { fadeInUp: isVisible })}>
              <h3>Link</h3>
              <ul className={styles.links}>
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={clsx(styles.footerWidget, styles.serviceWidget, { fadeInUp: isVisible })}>
              <h3>Services</h3>
              <ul className={styles.links}>
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={clsx(styles.footerWidget, { fadeInUp: isVisible })}>
              <h3>Contact</h3>
              <ul className={styles.contactList}>
                <li>+003894372632</li>
                <li>example@gmail.com</li>
                <li>Ukraine</li>
              </ul>
              <div className={styles.contactMap}>
                {!mapError ? (
                  <iframe
                    src={mapConfig.embedUrl}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                    onError={() => setMapError(true)}
                  ></iframe>
                ) : (
                  <div className={styles.mapFallback}>
                    <p>Our Location:</p>
                    <p>{mapConfig.locationName}</p>
                    <a className={styles.mapLink} href={mapConfig.directUrl} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.copyRight}>
            <p>
              Developed by{' '}
              <a href="https://github.com/Denis793" target="_blank" rel="nofollow">
                Denys Shevchenko
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
