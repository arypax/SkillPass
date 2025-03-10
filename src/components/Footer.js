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

        {/* Карта сайта */}
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

        {/* Курсы */}
        <div className={styles.links}>
          <h3>Courses</h3>
          <ul>
            <li>
              <a href="/courses#marketing">Marketing</a>
            </li>
            <li>
              <a href="/courses#management">Management</a>
            </li>
            <li>
              <a href="/courses#hr">HR & Recruiting</a>
            </li>
            <li>
              <a href="/courses#design">Design</a>
            </li>
            <li>
              <a href="/courses#development">Development</a>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div className={styles.contacts}>
          <h3>Contact Us</h3>
          <p>📞 +7 (777) 77-77-777</p>
          <p>✉ skillpass@gmail.com</p>
        </div>

        {/* Форма подписки */}
        <div className={styles.newsletter}>
          <h3>Sign up to our newsletter</h3>
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">→</button>
          </form>
          <p className={styles.subscribeText}>
            *Subscribe to our newsletter to receive communication and early
            updates from SkillPass.
          </p>
        </div>
      </div>

      {/* Копирайт и кнопка наверх */}
      <div className={styles.bottom}>
        <p>
          © All rights reserved.
          <br />
          Made by Vladislav Pinker and Yerassyl Saginlykov -
          <br />
          IT2CCO-2201
        </p>
        <br />
        <a href="#" className={styles.toTop}>
          GO TO TOP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
