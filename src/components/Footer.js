import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>
            SKILL<span className={styles.highlight}>PASS</span>
          </h2>
          <p>
            SkillPass is a leader in online studying. We provide relevant
            approaches to online learning, internships, and employment in the
            largest companies in the country.
          </p>
          <div className={styles.socialIcons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Site Map</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>

        <div className={styles.contacts}>
          <h3>Contact Us</h3>
          <p>📞 +7 (777) 77-77-777</p>
          <p>✉ skillpass@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
