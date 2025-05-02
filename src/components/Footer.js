import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Логотип и описание */}
        <div className={styles.brand}>
          <h2>
            SKILL<span className={styles.highlight}>PASS</span>
          </h2>
          <p>
            SkillPass is a leader in online studying. We have lots of courses
            and programs from the main market experts. We provide relevant
            approaches to online learning, internships, and employment in the largest
            companies in the country.
          </p>
        </div>

        {/* Карта сайта */}
        <div className={styles.siteMap}>
          <h3>SITE MAP</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/events-grid">Events</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </div>

        {/* Курсы */}
        <div className={styles.courses}>
          <h3>COURSES</h3>
          <ul>
            <li><a href="/under-construction">Marketing</a></li>
            <li><a href="/under-construction">Management</a></li>
            <li><a href="/under-construction">HR & Recruiting</a></li>
            <li><a href="/under-construction">Design</a></li>
            <li><a href="/under-construction">Development</a></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p className={styles.phone}>
            <a href="tel:+77777777777">+7 (777) 77-77-777</a>
          </p>
          <p className={styles.email}>
            <a href="mailto:skillpass@gmail.com">skillpass@gmail.com</a>
          </p>
        </div>

        {/* Форма подписки */}
        <div className={styles.newsletter}>
          <h3>SIGN UP TO OUR NEWSLETTER</h3>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Email address" />
            <button type="submit">→</button>
          </div>
          <p className={styles.subscribeText}>
            *Subscribe to our newsletter to receive communications and early updates from SkillPass SEO Agency.
          </p>
        </div>
      </div>

      {/* Копирайт */}
      <div className={styles.bottom}>
        <p>© All rights reserved 2025. Made by Vladislav Pineker and Yerassyl Sagindykov - IT2CCO-2301</p>
        <a href="#top" className={styles.toTop}>GO TO TOP</a>
      </div>
    </footer>
  );
};

export default Footer;
